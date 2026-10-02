# invowerk for Zapier

Create XRechnung and EN 16931 e-invoices from your data, and read incoming XRechnung, ZUGFeRD and Factur-X invoices into fields.

invowerk creates and reads e-invoices. Generate turns invoice data, keyed on EN 16931 Business Terms, into XRechnung or EN 16931 XML in UBL or CII. Amounts are written as given, and invowerk checks the result before returning it. Parse reads an incoming XML invoice or ZUGFeRD / Factur-X PDF into the same fields. Validate, render as HTML, convert between UBL and CII, and explain error codes are available too. Invoices are processed in memory, not stored. 500 free credits per month.

The [invowerk](https://invowerk.dev) integration for Zapier, version 1.0.1,
generated from the API's [OpenAPI document](../openapi.json). Connect it with
an API key: [create one](https://invowerk.dev/go/zapier?to=/app/api-keys).

| Action | What it does |
|---|---|
| `get_me` | Your plan, remaining requests, and remaining credits |
| `parse_invoice` | Read an e-invoice into JSON |
| `convert_invoice` | Convert an e-invoice between UBL and CII |
| `generate_invoice` | Create an e-invoice from JSON |
| `explain_codes` | Explain an error code |
| `render_invoice` | Render an e-invoice as HTML |
| `validate_invoice` | Check an e-invoice |

## Develop

```sh
npm install
npx zapier-platform validate --without-style
API_KEY=... npm test   # live calls; without a key only the definitions are checked
```

Linked to Zapier integration `247125` (`.zapierapprc`). Releases of this repository push the version to Zapier
(`.github/workflows/publish.yml`).

Support: https://invowerk.dev/support
