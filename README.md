# Coast Sushi Catering

A responsive private-chef omakase website serving Pawleys Island, Murrells Inlet, Myrtle Beach, North Myrtle Beach, and Conway. The experience is ten courses at $160 per guest, with at least 14 days’ notice.

The site uses React, TypeScript, and Vite. Food photography is from the chef's uploaded portfolio and is optimized as WebP for the website.

## Run locally in VS Code

1. Install Node.js 20 or newer.
2. Open the repository folder in VS Code.
3. Run `npm install` in the integrated terminal.
4. Run `npm run dev` and open the local address printed in the terminal.

## Project checks

- `npm run typecheck` — TypeScript validation
- `npm run build` — production build
- `npm run check` — run both checks

## Git workflow

Create a feature branch for each change, commit the work, and open a pull request against `main`. GitHub Actions runs `npm run check` on pull requests and pushes to `main`. Review the checks and the website changes before merging.

## Booking status and launch planning

The form validates the 14-day lead time, calculates a base estimate, and collects contact details, event address, preferences, allergies, and setup notes. Visitors can review and download their request. It does **not** send or store inquiries, reserve dates, order fish, or collect payment. A reliable delivery destination and business approval workflow are still required.

See [the launch plan](docs/omakase-launch.md) for issue-by-issue progress, remaining decisions, follow-up questions, and marketing recommendations.
