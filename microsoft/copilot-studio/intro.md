# invowerk MCP

invowerk creates and checks e-invoices. In the browser it creates ZUGFeRD PDFs and XRechnung from a form and checks each file before download. It checks ZUGFeRD 2.5.2 and Factur-X 1.09.2 PDFs, XRechnung 3.0.2 (UBL and CII) and Peppol BIS Billing 3.0.21. XRechnung goes through the KoSIT validator; PDFs are also checked for PDF/A. Each check returns a report with the file's SHA-256, rule sets and result. Invoices are processed in memory, not stored. Free web tool; REST API and MCP server with 500 free credits a month.

## Publisher

Podshalocef

## Prerequisites

An invowerk account and an API key: create one at https://invowerk.dev/go/copilot-studio?to=/app/api-keys.

## Obtaining credentials

Sign in at https://invowerk.dev, open https://invowerk.dev/go/copilot-studio?to=/app/api-keys, create a key and paste it into the connection's API key field. It is sent in the `X-API-Key` header.

## Tools

The connector speaks the Model Context Protocol (Streamable HTTP) with https://api.invowerk.dev/mcp/. An agent discovers the invowerk tools at runtime, so new tools appear without a connector update.

## Known issues and limitations

- Tool calls cost the same credits as the matching API calls.

## Support

https://invowerk.dev/support · support@invowerk.dev · API reference: https://invowerk.dev/docs
