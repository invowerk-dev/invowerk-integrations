# Validate e-invoices in CI (GitHub Actions)

A GitHub Actions workflow that checks every e-invoice in a folder of your
repository with [invowerk](https://invowerk.dev) on each push and pull request,
and fails the run when one of them is invalid.

Use it when your software produces e-invoices and you keep sample or test
invoices in the repository: a change that breaks the output (a missing VAT
breakdown, a missing seller VAT identifier, wrong totals, an outdated ZUGFeRD
profile) turns the build red before a customer's accounting system rejects the
invoice.

## What it checks

Each XML or PDF file is sent to invowerk's `validate_invoice` operation, which
checks XRechnung, ZUGFeRD / Factur-X and Peppol BIS invoices against the EN 16931
rules and, for XRechnung, against the official KoSIT rule set. The step fails
when the answer's `valid` is `false`, and prints the findings, with
invowerk's explanation for each rule it has one for. invowerk checks the
invoice format and its rules; it does not check whether the amounts or the tax
treatment are right for your business.

## Setup

1. Copy [`validate-e-invoices.yml`](validate-e-invoices.yml) to
   `.github/workflows/validate-e-invoices.yml` in your repository.
2. Set `INVOICE_DIR` and the two `paths` filters to the folder holding your
   invoices (default: `invoices/`).
3. Get an API key at
   <https://invowerk.dev/go/tpl-e-rechnung-ci-pruefen?to=/app/api-keys> and add
   it as the repository secret `INVOWERK_API_KEY`. Without a key the workflow
   still runs, on the anonymous tier's lower limits. Each check costs one
   credit.

## How it works

- The `list` job finds every `*.xml` and `*.pdf` under `INVOICE_DIR` and hands
  the list to the next job.
- The `validate` job runs once per file (a matrix, `fail-fast: false`, so every
  invoice is reported, at most 4 at a time) and calls
  [`invowerk-dev/invowerk-action`](https://github.com/invowerk-dev/invowerk-action)
  with `fail-if: '.valid == false'`.
- A GitHub matrix holds at most 256 jobs; for a larger folder, point
  `INVOICE_DIR` at a representative subset.

To try it, add the sample invoice
<https://invowerk.dev/app-static/demo/beispiel-xrechnung.xml> to the folder.
