# My Home Designer — Interior Enquiry Assistant

**Early prototype, not a production service.** A small, runnable project exploring Claude-assisted enquiry intake for a real interior design and execution business in Bhagalpur, India.

- Business: My Home Designer
- Founded: 9 November 2025 (founder-provided)
- Website: https://myhomdesigner.in
- Contact: info@myhomedesigner.in

## Problem and workflow

Interior enquiries often arrive without room dimensions, budget, material preferences or timeline. The assistant collects a short enquiry, prepares a designer handoff, and flags information to confirm at a site visit. It does not generate binding prices, bookings, final designs or engineering advice.

## Implemented

- Responsive enquiry form with service, location, dimensions, budget and notes.
- Free **demo mode** using a deterministic template. This is explicitly not an AI-generated output.
- Optional **Claude mode** with a server-side Messages API integration.
- Designer-review reminder and text download.
- Fictional example input; no customer records are included.
- No database or enquiry persistence. API secrets remain on the server.

**Not implemented:** WhatsApp integration, CRM sync, authentication for public hosting, quotation pricing, production website integration. Live Claude requests have not been validated with a real API key. The integration can be exercised after the owner configures an accessible model and API key.

## Run locally

Requires Python 3.10 or later; no packages to install.

```bash
python server.py
```

Open http://127.0.0.1:8000. Click **Load fictional example**, then **Prepare project brief**. Demo mode needs no API key or credits.

## Enable Claude mode (optional, consumes API credits)

Create an API key in your own Claude Console organization. Select a model ID available to that account from the official model documentation. Configure both variables **before starting the server**.

Windows PowerShell:

```powershell
$env:ANTHROPIC_API_KEY = Read-Host "Enter your Claude API key" -MaskInput
$env:ANTHROPIC_MODEL = "YOUR_AVAILABLE_MODEL_ID"
python server.py
```

`-MaskInput` requires PowerShell 7.1+. On older PowerShell, set the environment variable through a trusted local secret-management method; do not put your key in a public file or commit.

macOS/Linux:

```bash
read -r -s -p "Claude API key: " ANTHROPIC_API_KEY
export ANTHROPIC_API_KEY
export ANTHROPIC_MODEL="YOUR_AVAILABLE_MODEL_ID"
python server.py
```

Refresh the page and explicitly select **Claude API · paid usage**. Each request sends the entered fields to Anthropic and caps the requested output at 1,000 tokens. This is not a total spending cap; configure usage limits in your Console account separately. No API key is provided with this project.

## Data and deployment boundaries

The server deliberately binds only to localhost. It rejects unexpected Host headers, uses an ephemeral request token, limits payload size and does not log enquiry text. Demo mode sends no data to Anthropic. Claude mode sends the enquiry fields to Anthropic; provider data-handling terms still apply. The app itself keeps no enquiry database, but displayed/downloaded briefs remain on the user's device.

Do not expose this development server through a public tunnel or deploy it as-is. Public deployment requires authentication, rate limiting, HTTPS, secret management and appropriate customer consent. A GitHub repository shares the code; it does not automatically host a working Python demo.

## Application status

This project may support a truthful Claude Startups application. It is not proof of Anthropic approval, existing production Claude usage or a guarantee of promotional credits. Describe prototype features as implemented and future integrations as planned.

## References

- [Claude Startups](https://claude.com/programs/startups)
- [Messages API](https://platform.claude.com/docs/en/api/messages/create)
- [Available models](https://platform.claude.com/docs/en/about-claude/models/overview)

