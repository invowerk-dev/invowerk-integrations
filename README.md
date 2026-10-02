# invowerk integrations

German e-invoice checker: ZUGFeRD/Factur-X PDFs incl. PDF/A, XRechnung via the KoSIT validator, Peppol BIS. Free web tool, API, MCP.

invowerk checks e-invoices: ZUGFeRD 2.5.2 and Factur-X 1.09.2 PDFs, XRechnung 3.0.2 (UBL and CII) and Peppol BIS Billing 3.0.21. XRechnung goes through the KoSIT validator. PDFs are also checked for PDF/A and against their embedded invoice data. Common rule messages come with cause and fix in German. Each check returns a report with the file's SHA-256, time, rule sets and result. The Prüfstand test files and their expected results are public. Invoices are processed in memory, not stored. Free web tool; REST API and MCP server with 500 free credits per month.

Official integrations for the [invowerk API](https://invowerk.dev), generated from its [OpenAPI document](openapi.json) and published from this repository.

## Get an API key

[Create a key](https://invowerk.dev/go/connectors?to=/app/api-keys) and send it in the `X-API-Key` header.

## Integrations

- **n8n** — community node [`@invowerk-dev/n8n-nodes-invowerk`](https://www.npmjs.com/package/@invowerk-dev/n8n-nodes-invowerk), install it under Settings → Community Nodes
- **Python SDK** — `pip install invowerk` · [PyPI](https://pypi.org/project/invowerk/)
- **TypeScript SDK** — `npm install @invowerk-dev/sdk` · [npm](https://www.npmjs.com/package/@invowerk-dev/sdk)
- **GitHub Action** — [`invowerk-dev/invowerk-action`](https://github.com/marketplace/actions/invowerk-api) on the GitHub Marketplace

## Operations

| Operation | Endpoint | What it does |
|---|---|---|
| `get_me` | `GET /v1/me` | Your plan, remaining requests, and remaining credits |
| `parse_invoice` | `POST /v1/parse` | Read an e-invoice into JSON |
| `convert_invoice` | `POST /v1/convert` | Convert an e-invoice between UBL and CII |
| `generate_invoice` | `POST /v1/generate` | Create an e-invoice from JSON |
| `explain_codes` | `GET /v1/explain` | Explain an error code |
| `render_invoice` | `POST /v1/render` | Render an e-invoice as HTML |
| `validate_invoice` | `POST /v1/validate` | Check an e-invoice |

API reference: https://invowerk.dev/docs · Base URL: `https://api.invowerk.dev`

## Support

https://invowerk.dev/support

Every file listed in `.generated` is rebuilt from the live API; changes to them are overwritten.
