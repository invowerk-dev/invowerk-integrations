# @invowerk-dev/n8n-nodes-invowerk

An [n8n](https://n8n.io) community node for the [invowerk API](https://invowerk.dev).

Create XRechnung and EN 16931 e-invoices from your data, and read incoming XRechnung, ZUGFeRD and Factur-X invoices into fields.

invowerk creates and reads e-invoices. Generate turns invoice data, keyed on EN 16931 Business Terms, into XRechnung or EN 16931 XML in UBL or CII. Amounts are written as given, and invowerk checks the result before returning it. Parse reads an incoming XML invoice or ZUGFeRD / Factur-X PDF into the same fields. Validate, render as HTML, convert between UBL and CII, and explain error codes are available too. Invoices are processed in memory, not stored. 500 free credits per month.

## Installation

In n8n, open **Settings > Community Nodes**, choose **Install** and enter `@invowerk-dev/n8n-nodes-invowerk`.

## Credentials

[Create an API key](https://invowerk.dev/go/n8n?to=/app/api-keys), then add an **invowerk API** credential in n8n and paste the key.

## Operations

| Resource | Operation | What it does |
|---|---|---|
| Account | Get Me | Your plan, remaining requests, and remaining credits |
| Invowerk | Parse Invoice | Read an e-invoice into JSON |
| Invowerk | Convert Invoice | Convert an e-invoice between UBL and CII |
| Invowerk | Generate Invoice | Create an e-invoice from JSON |
| Invowerk | Explain Codes | Explain an error code |
| Invowerk | Render Invoice | Render an e-invoice as HTML |
| Invowerk | Validate Invoice | Check an e-invoice |

File inputs read an input binary field (default `data`). JSON answers become the item; text and XML answers come back as `data`; files as the binary field `data`. Queued jobs are polled until they finish.

## Support

https://invowerk.dev/support
