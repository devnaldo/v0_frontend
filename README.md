# Khel Club Frontend — Walkover UI

This branch renders match outcomes supplied by the API. **The frontend never computes or
re-derives a result**; it only displays `outcome_type`, `outcome_label`, `requires_score`,
`winner_team_id` and the normal score fields.

Changed files:
- `src/utils/matchOutcome.js` — `getOutcomeView()` and `DECLARABLE_OUTCOMES`
- `src/components/common/OutcomeBadge/` — `OutcomeBadge`, `WinnerBadge`
- `src/components/fixtures/TournamentFixtures.js`, `Fixtures.js`
- `src/components/matchTable/MatchTable.js`, `components/refereeMatchTable/RefereeMatchTable.js`
- `src/screen/referee/match/Match.js`, `src/components/matchOverlay/MatchOverlay.js`
- `src/components/fixtures/KnockoutBracket.js`, `KnockoutBracket2.js`
- `src/store/urls.js` — `updateMatchOutcome`

To add an outcome (e.g. forfeit), add one entry to `DECLARABLE_OUTCOMES`, `{ key, label }`;
the referee button, dialog and badges are data-driven.

Run `npm run dev` and open **http://localhost:3000** (use `localhost`, not `127.0.0.1`, so the
API base URL resolves correctly).

Full design, schema and assumptions: `v0_backend/README.md`.

## Original README

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
