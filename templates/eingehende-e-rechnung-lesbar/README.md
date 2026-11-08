# Incoming e-invoice: data row and readable copy (n8n)

An n8n workflow for the e-invoices that arrive by email. For every XML or PDF
attachment it adds one row with the invoice data to a sheet and, for XML
invoices such as XRechnung, emails a readable HTML view to your bookkeeping
address.

Use it when suppliers send XRechnung or ZUGFeRD files you cannot read without
extra software, and you want the key figures in one list. Every node ships
with n8n, so the workflow runs on n8n Cloud and on a self-hosted n8n.

## Flow

1. **New email with invoice** (Email Trigger, IMAP): new mails, with their
   attachments.
2. **One item per attachment** (Code): keeps the `.xml` and `.pdf` attachments,
   one item each.
3. **Parse invoice** (HTTP Request, `POST https://api.invowerk.dev/v1/parse`):
   reads XRechnung (UBL or CII) and the invoice data embedded in a ZUGFeRD /
   Factur-X PDF, and answers with JSON. It continues on error, so a PDF
   without invoice data still gets a row, with invowerk's reason in `status`.
4. **Shape sheet row** (Code) and **Append to invoice log** (Google Sheets):
   sender, subject, file, invoice number, dates, seller and VAT ID, currency,
   net and gross totals, amount due, IBAN, format.
5. **Only XML invoices** (Code), **Render readable view** (HTTP Request,
   `POST https://api.invowerk.dev/v1/render`), **Attach as HTML file** (Code)
   and **Send readable copy** (Send Email, SMTP): the readable view of each
   XML invoice as an HTML attachment. A ZUGFeRD / Factur-X PDF is readable
   already and skips this branch.

## Setup

1. Import `workflow.json` into n8n (Cloud, or self-hosted 2.33 or later).
2. Get an API key at
   <https://invowerk.dev/go/tpl-eingehende-e-rechnung-lesbar?to=/app/api-keys>.
   In **Parse invoice**, create a **Header Auth** credential with the name
   `X-API-Key` and your key as the value. Pick the same credential in
   **Render readable view**.
3. Connect your mailbox (IMAP) in **New email with invoice**. It marks the mails
   it read as read; a mailbox or folder only for invoices works best.
4. Create a sheet whose first row holds the column names `received_from`,
   `subject`, `file`, `status`, `invoice_number`, `issue_date`, `due_date`,
   `seller`, `seller_vat_id`, `currency`, `net_total`, `gross_total`,
   `amount_due`, `payment_iban`, `format`, `source`, and pick it in **Append to
   invoice log**.
5. Connect SMTP and set the sender and recipient in **Send readable copy**.

To test, email yourself the sample invoice
<https://invowerk.dev/app-static/demo/beispiel-xrechnung.xml>.

## The HTTP Request nodes

Both use **Authentication** Generic Credential Type, **Generic Auth Type**
Header Auth. Both send the attachment from the binary field `data` as the
multipart field `file` (**Body Content Type** Form-Data, parameter type
**n8n Binary File**).

- **Parse invoice**: `POST https://api.invowerk.dev/v1/parse`, **Response
  Format** JSON. Its **On Error** setting is "Continue": a file invowerk
  cannot read becomes an item with `error`, and **Shape sheet row** writes the
  reason from `details.body.detail` into `status`.
- **Render readable view**: `POST https://api.invowerk.dev/v1/render` with the
  query parameter `lang` = `de`, **Response Format** Text, **Put Output in
  Field** `data`. **Attach as HTML file** turns that text into the file.

## Scope and limits

- The readable view uses German labels (`lang = de`); set `en` in **Render
  readable view** for English.
- The sheet lists what the invoice states. It is not a check: to check the
  invoice against the EN 16931 and XRechnung rules, add an HTTP Request step
  that sends the file to `POST https://api.invowerk.dev/v1/validate`.
- Gmail: replace the trigger with a Gmail Trigger that downloads attachments,
  and the SMTP step with Gmail; the rest stays as it is.
