# Claude Startups application — My Home Designer

## Confirmed business details

- Name: My Home Designer
- Founder applying: Manish Sharma
- Founded: 9 November 2025 (09/11/2025 interpreted as DD/MM/YYYY)
- Email: info@myhomdesigner.in
- Website: https://myhomdesigner.in
- Location: Bhagalpur, Bihar, India
- Business: Interior design and execution, including modular kitchens, wardrobes, TV units, complete interiors and UPVC windows.

## Apply

1. Create or sign in to your own Claude Console account using the business email above.
2. Open https://platform.claude.com/offers/startups-application.
3. Provide your actual business details. Use your public business website as the website; it does not grant access to your private code.
4. If the form allows supporting project links, add the public URL of this prototype's GitHub repository after it is published. Do not assume GitHub replaces the matching-domain website requirement.
5. Use accurate prototype wording. Do not claim production Claude usage, revenue, funding or customers you cannot substantiate. Describe proposed integrations as planned.
6. After approval, follow the acceptance email and redeem eligible benefits in Console. Do not purchase a Team subscription just to apply: the free Team offer is for organizations new to Team.

## Suggested description after this prototype is uploaded

My Home Designer is a bootstrapped interior design and execution business based in Bhagalpur, India, founded in November 2025. We have built an early enquiry-assistant prototype with a working template-based demo and an optional server-side Claude API integration. It collects customers' location, room dimensions, budget and service requirements, then prepares a brief and follow-up questions for our designers. The Claude integration is implemented but has not yet been tested with a live API key. We intend to use the credits to evaluate this workflow and integrate it into our website; WhatsApp and CRM integration are future plans.

## Current advertised offer (checked 8 October 2026)

The official program page advertises $1,000 in first-party Claude API credits, expiring six months after grant, and one free year of Claude Team for up to five Premium seats for organizations new to Team. Partner offers have separate conditions. Startups founded in the last five years or funded in the last two years can apply; VC funding is not required. Approval is discretionary, not guaranteed by uploading this project.

Sources:
- https://claude.com/programs/startups
- https://www.anthropic.com/startup-program-official-terms

## Validation actually completed

- Python compilation and JavaScript syntax checks.
- HTTP tests for demo output, missing fields, invalid service/mode, oversized notes and malformed input shape.
- Checks for rejected request tokens, unexpected Host headers and blocked non-public paths.
- Mocked Claude request and response, including endpoint, model, API key header and output-token limit.

Live Claude API calls were not performed. Browser layout and interactive browser tests could not be completed because this environment has no installed browser executable. A browser review and a real API call should be completed before using it with real customer enquiries.
