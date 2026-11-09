# Coast Sushi Service

A responsive sushi catering website serving Myrtle Beach, North Myrtle Beach, Conway, and the surrounding Grand Strand.

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

## Booking inquiries

The inquiry forms open a prefilled email to coastsushiservice@gmail.com in the visitor’s email app. Visitors must review and send the draft; the site does not automatically deliver or store requests. Phone contact is available at 843-251-2291. Dates are reserved only after availability, menu, quote, deposit, and cancellation terms are agreed.
