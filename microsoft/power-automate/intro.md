# invowerk

invowerk checks e-invoices: ZUGFeRD 2.5.2 and Factur-X 1.09.2 PDFs, XRechnung 3.0.2 (UBL and CII) and Peppol BIS Billing 3.0.21. XRechnung goes through the KoSIT validator. PDFs are also checked for PDF/A and against their embedded invoice data. Common rule messages come with cause and fix in German. Each check returns a report with the file's SHA-256, time, rule sets and result. The Prüfstand test files and their expected results are public. Invoices are processed in memory, not stored. Free web tool; REST API and MCP server with 500 free credits per month.

## Publisher

Podshalocef

## Prerequisites

An invowerk account and an API key: create one at https://invowerk.dev/go/power-automate?to=/app/api-keys.

## Obtaining credentials

Sign in at https://invowerk.dev, open https://invowerk.dev/go/power-automate?to=/app/api-keys, create a key and paste it into the connection's API key field. It is sent in the `X-API-Key` header.

## Supported operations

### Your plan remaining requests and remaining credits

Check where you stand before a call fails.

### Read an e invoice into JSON

Read an existing e-invoice into JSON keyed on EN 16931 Business Terms.

### Convert an e invoice between UBL and CII

Convert an e-invoice between UBL and CII.

### Create an e invoice from JSON

Create an EN 16931 e-invoice from JSON.

### Explain an error code

Explain rule codes and invowerk's own `IW-*` Hinweise in German or English.

### Render an e invoice as HTML

Render an XML e-invoice as a readable HTML page.

### Check an e invoice

Check an e-invoice against EN 16931 and the German rules.

## Known issues and limitations

- Files are uploaded as multipart file parts.
- Convert an e invoice between UBL and CII answers with JSON; the document itself is a field of the answer.
- Create an e invoice from JSON answers with JSON; the document itself is a field of the answer.
- Render an e invoice as HTML answers with JSON; the document itself is a field of the answer.

## Support

https://invowerk.dev/support · support@invowerk.dev · API reference: https://invowerk.dev/docs
