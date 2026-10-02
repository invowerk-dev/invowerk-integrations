# invowerk

Create XRechnung and EN 16931 e-invoices from your data, and read incoming XRechnung, ZUGFeRD and Factur-X invoices into fields.

invowerk creates and reads e-invoices. Generate turns invoice data, keyed on EN 16931 Business Terms, into XRechnung or EN 16931 XML in UBL or CII. Amounts are written as given, and invowerk checks the result before returning it. Parse reads an incoming XML invoice or ZUGFeRD / Factur-X PDF into the same fields. Validate, render as HTML, convert between UBL and CII, and explain error codes are available too. Invoices are processed in memory, not stored. 500 free credits per month.

A Dify tool plugin for the [invowerk API](https://invowerk.dev).

## Setup

1. Install **invowerk** from the Dify Marketplace (Plugins → Marketplace).
2. [Create an API key](https://invowerk.dev/go/dify?to=/app/api-keys).
3. Open the plugin's tool settings, choose **Authorize** and paste the key as the invowerk API key credential.

## Usage

Add the tools to a workflow, chatflow or agent. File inputs take a Dify file; JSON object and array inputs take JSON text. JSON answers come back as JSON, text and XML as text, documents as files. A tool that queues a job returns its id: poll it with the job tool, then fetch its result with the matching result tool.

| Tool | Endpoint | What it does |
|---|---|---|
| Get me | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| Parse invoice | `POST /v1/parse` | Read an e-invoice into JSON |
| Convert invoice | `POST /v1/convert` | Convert an e-invoice between UBL and CII |
| Generate invoice | `POST /v1/generate` | Create an e-invoice from JSON |
| Explain codes | `GET /v1/explain` | Explain an error code |
| Render invoice | `POST /v1/render` | Render an e-invoice as HTML |
| Validate invoice | `POST /v1/validate` | Check an e-invoice |

## Connection

The plugin connects to `https://api.invowerk.dev` over HTTPS and sends the API key in the `X-API-Key` header; the Dify instance needs outbound network access to that endpoint. API reference: https://invowerk.dev/docs

## Source and support

Source repository: https://github.com/invowerk-dev/invowerk-integrations/tree/main/dify

Support: https://invowerk.dev/support
