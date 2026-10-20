# Coast & Country Sushi Co.

A responsive sushi catering website concept for the South Carolina coast and Pee Dee, serving Pawleys Island, Murrells Inlet, Myrtle Beach, North Myrtle Beach, Conway, and Florence.

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

## Before launch

Confirm the final business name, menu and package details, pricing, booking availability, service radius, and customer contact method. The event form is a preview and does not send or store inquiries until it is connected to a booking destination.
