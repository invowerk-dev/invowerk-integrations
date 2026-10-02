# Sheet row to XRechnung, sent by email (n8n)

An n8n workflow that turns each new row of an invoice sheet into an XRechnung
and emails it to the buyer. invowerk builds the XML (UBL syntax, XRechnung
rules) and checks it before it is returned.

Use it when you write invoices as rows in Google Sheets (or Airtable) and a
buyer, often a public authority, asks for an XRechnung instead of a PDF.

## Flow

1. **New invoice row** (Google Sheets Trigger): fires once per new row.
2. **Build invoice body** (Code): maps the row and your fixed seller details to
   the `generate_invoice` fields and computes the line total, the VAT and the
   invoice totals.
3. **Generate XRechnung** (invowerk, Generate Invoice): flavor `xrechnung`,
   syntax `ubl`. invowerk checks the XML it built: an invoice that breaks an
   EN 16931 or XRechnung rule is never returned, the node fails instead.
   Missing or malformed fields come back as an error naming the field.
4. **Attach as XML file** (Code): turns the XML text into an `<invoice number>.xml`
   file.
5. **Email the invoice** (Gmail): sends it to the buyer's address from the row.

## Setup

1. Install the community node `@invowerk-dev/n8n-nodes-invowerk`
   (Settings > Community Nodes) and import `workflow.json`.
2. Get an API key at
   <https://invowerk.dev/go/tpl-zeile-zu-xrechnung?to=/app/api-keys> and add it
   as the invowerk credential.
3. Create a sheet whose first row holds these column names:

   | Column | Example | Business term |
   | --- | --- | --- |
   | `invoice_number` | `INV-001` | BT-1 |
   | `issue_date` | `2026-01-15` | BT-2 |
   | `due_date` | `2026-02-15` | BT-9 |
   | `buyer_reference` | `04011000-1234512345-06` | BT-10 (Leitweg-ID) |
   | `buyer_name` | `Buyer AG` | BT-44 |
   | `buyer_city` | `Munich` | BT-52 |
   | `buyer_post_code` | `80331` | BT-53 |
   | `buyer_country` | `DE` | BT-55 |
   | `buyer_email` | `buyer@example.com` | BT-49 |
   | `item` | `Widget` | BT-153 |
   | `quantity` | `1` | BT-129 |
   | `unit_price` | `100.00` | BT-146 |
   | `vat_rate` | `19` | BT-152 |

4. In **New invoice row**, pick the spreadsheet and the sheet.
5. In **Build invoice body**, replace `SELLER` and `PAYMENT_IBAN` with your own
   company details. XRechnung requires a seller contact (name, phone and
   email) and an electronic address; the example also carries a VAT ID.
6. Connect a Gmail account in **Email the invoice**.

The trigger carries one pinned sample row. Disable **Email the invoice** and run
the workflow once to see the generated XML; its data matches invowerk's
published `generate_invoice` example.

## Scope and limits

- One row is one invoice with one line at one VAT rate (category `S`). For more
  lines, extend `lines` and `tax_breakdown` in **Build invoice body**.
- The amounts are computed by the Code node, not by invowerk. invowerk writes
  them into the XML as given and checks the result against the rules; it does
  not check that the prices or the VAT treatment are right for your business.
- Numbers may be written `1234.50` or `1.234,50`.
- XRechnung needs `buyer_reference` (BR-DE-15). For a buyer who does not ask
  for XRechnung, set the flavor to `en16931` in **Generate XRechnung**.
- Airtable: replace the trigger with an Airtable Trigger whose fields use the
  same names; the rest of the workflow stays as it is.
