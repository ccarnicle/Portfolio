# cjcarnicle.com redesign plan

Date: 24 September 2026. Planning only. This document is the implementation guide. It does not change the site.

Audience for the rebuilt site: hiring managers for Solutions Engineer, Forward Deployed Engineer, Solutions Architect, and Technical Account Manager roles at stablecoin, tokenization, and institutional digital-asset companies.

A reader should understand, in about ten seconds, that Christopher Carnicle is a customer-facing technical person who also founded and shipped an onchain product.

## 1. Current-state findings

### Repository

- Path: `/Users/cjcarnicle/aiSports/dev/Portfolio`
- Remote: `https://github.com/ccarnicle/Portfolio.git` (`origin`, branch `master`)
- Latest local commit, from `.git/logs/HEAD`: `46303c57515008aef118933f3dcaea17af9c6b17`, message `update`, 6 May 2025. `git` itself could not be run in this environment because the Xcode license has not been accepted.
- Stack, from `package.json`: Create React App (`react-scripts` 5.0.0), React 17.0.2, React DOM 17.0.2, React Router DOM 6.2.2, Bootstrap 5.1.3, react-bootstrap 2.2.1. This is not a Next.js app. Next.js appears only as a skill icon and in old project copy.
- Other dependencies: `@react-pdf/renderer` 2.2.0 (no import under `src/`), `axios` 0.26.1 (no import under `src/`), `react-github-calendar` (only in `src/components/About/Github.js`, and that component is commented out in `About.js`), `react-icons`, `react-parallax-tilt` (no import under `src/`), `react-pdf` 5.7.1 (used by `ResumeNew.js`), `react-tsparticles` (`Particle.js`), `typewriter-effect` (`Type.js`), `web-vitals`.
- Routes in `src/App.js`: `/`, `/project`, `/about`, `/resume`. Unknown paths client-redirect to `/`.
- There is no `vercel.json`, `netlify.toml`, `firebase.json`, or `.vercel` directory in the repo. Hosting is configured only in the Vercel dashboard.
- `public/robots.txt` exists. `public/manifest.json` still has `theme_color` `#000000`.
- Template leftovers that must not ship: `src/Assets/Soumyajit_Behera-BIT_MESRA.pdf`, commented cards in `Projects.js` that link to `github.com/soumyajit4419`, and unused template images (`chatify.png`, `codeEditor.png`, `emotion.png`, `leaf.png`, `blog.png`).

### What is on the live site

Checked 24 September 2026.

- `https://cjcarnicle.com/` returns `308` to `https://www.cjcarnicle.com/`. Response header `server: Vercel`. Apex A record is `76.76.21.21` (Vercel). `www` is a CNAME to `cjcarnicle.com`.
- Nameservers are `ns77.domaincontrol.com` and `ns78.domaincontrol.com` (GoDaddy DNS). The domain is attached to Vercel; DNS is not at Vercel nameservers.
- `https://www.cjcarnicle.com/about`, `/project`, `/resume`, and `/projects` all return HTTP 200 with the same SPA shell. `/projects` is not a React route; after JavaScript loads, `App.js` sends unknown paths to `/`.
- `https://portfolio-ccanicle.vercel.app` returns Vercel `DEPLOYMENT_NOT_FOUND`. That URL is still the Open Graph URL in `public/index.html`.
- Live HTML matches `public/index.html`: title `CJC | Portfolio`, description `Web site created using create-react-app` plus a second description `Self Developed personal website built with React.js`, typos `buit` and `buiilt`, `theme-color` `#000000`, and a preview image on Firebase (`fantasyball-6e433`).
- Live JS bundle is `/static/js/main.40c4cc50.js`. The local `build/` folder is an older artifact (`main.39a69d0f.js`, build directory dated June 2023). Production and the local `build/` folder are not the same file. The live bundle still contains the stale sentences below, so production content matches the current source, not a newer unpublished version.
- `https://www.aisportspro.com/` returned 200. `https://github.com/ccarnicle` returned 200. LinkedIn (`https://www.linkedin.com/in/ccarnicle/`) did not return a normal status from this environment; the URL is the one already hardcoded on the site.

### Copy that is stale or wrong

The live site and the September 2026 resume disagree. The site must follow the resume and the rewrite doc, not the current React copy.

| Claim on the live site | Source of the conflict | What to publish |
| --- | --- | --- |
| 9 years at Texas Instruments, book from $5M to over $40M annually (`Home2.js`) | Resume PDF and rewrite: 8 years, $1.5M (2014) to $38.5M (2018). Not "annually." | $1.5M (2014) to $38.5M (2018). Top 5% / High Five Winners Circle. |
| Typewriter: Entrepreneur, Software Engineer, Full Stack Developer, Blockchain Consultant (`Type.js`) | Job-search positioning | Solutions / Forward Deployed Engineer. Do not lead with developer. |
| Digital nomad, majority of time across the US and Mexico (`AboutCard.js`) | Resume header is Chicago, IL | Chicago, IL. Drop the nomad sentence. |
| Last 4 years as entrepreneur; aiSports first season over 3.5k MAU (`AboutCard.js`, `Projects.js`) | Resume: 08/2020–08/2026, four NBA seasons, averaged 2k MAUs. Rewrite: ~2k MAU. | About 2,000 monthly active users. Four seasons. |
| "Etherium testnet" (`Projects.js`) | Typo | Ethereum, if that sentence is kept at all. It should not be a featured card. |
| 2,000 AI NFTs, sold for up to $200 (`Projects.js`) | Resume and rewrite: 5,000 NFTs. The $200 sale is only on the old site. | 5,000 NFTs. Do not publish the $200 figure. |
| pdf2sheets WIP, personal GPT-4 chat app, aiSports v1 testnet card | Rewrite: drop low-value projects. None of these are on the current resume. | Do not feature them. |

Other live-site problems: particle background, 1.2s preloader (`App.js`, `#preloader` in `src/style.css` is `#0c0513`), purple/orange accent (`#39B8EF`, `#FF9344`), fixed dark Bootstrap navbar, and a resume page that renders `src/Assets/cj_resume.pdf` (26 June 2023) through `react-pdf` plus a cdnjs PDF.js worker. That PDF is three years older than `~/Downloads/CJ Resume FDE Coinflow.pdf`.

`ResumeNew.js` only renders page 1 of the PDF.

### Facts extracted from the current resume PDF

File: `/Users/cjcarnicle/Downloads/CJ Resume FDE Coinflow.pdf` (one page, text extracted 24 September 2026). This file is a Coinflow-oriented draft. It is the newest resume. It is not yet the file the website serves.

- Christopher J. Carnicle, cjcarnicle@gmail.com, (832) 628-2265, Chicago, IL, cjcarnicle.com
- Headline on this draft: Forward Deployed Engineer
- Summary: solutions architect; 8 years as an Account Executive at Texas Instruments, technical discovery and customer integration; TI top 5% sales award; 6 years as founder of aiSports; production TypeScript, React, and Solidity for payments, escrow, and multi-chain contests
- aiSports, CEO & Founder, 08/2020–08/2026. Onchain daily fantasy sports. Averaged 2k MAUs. Launched 5,000 NFTs. Created a token. Smart-contract prize pools. Live for 4 NBA seasons. Stablecoin buy-in, escrow, and automated payouts. React web app and REST APIs. Debugged contest-window issues, "0 day downtime." SQL in BigQuery. AI pipeline on GCP for NBA player projections. Won 4 hackathons and multiple ecosystem grants. Relationships with each chain partner.
- Texas Instruments, Enterprise Account Executive, SF Bay Area, 08/2011–06/2019. Revenue $1.5M (2014) to $38.5M (2018). High Five Winners Circle, top 5% of US sales. Presented components and supported the product lifecycle. Forecasted quarterly revenue.
- Theranos, Global Supply Manager, Palo Alto, 04/2013–12/2013. 500+ components, 30 PCBs, 3 products. Inventory tool. These dates overlap the PDF's continuous TI range.
- Scouture, Management Consultant, 08/2019–11/2022. Day-to-day business, city tours for GAP candidates, website, Google Sheets automation.
- Skills line: Java, C, JavaScript, Node.js, Material-UI, React, Firebase (Firestore, Functions, Authentication, Analytics), GCP (BigQuery, Storage, Vertex-AI), Solidity (spelled "Etherium"), Cadence (Flow), Stable Diffusion. No TypeScript, webhooks, or SDK on the skills line. TypeScript and REST APIs are in the summary and the aiSports bullets.
- Education: University of Texas at Austin, B.S. Electrical Engineering and Computer Engineering, 08/2007–05/2011. Embedded systems, sales engineering. No GPA.

### What the rewrite doc changes

File: `/Users/cjcarnicle/Downloads/Outreach Templates and Resume Rewrite.docx`. This is the content standard for the public site. Where it conflicts with the Coinflow PDF, the public page uses the rewrite's frame, and the conflict is listed as an open question rather than published twice.

Use on the site:

- Identity line: Solutions / Forward Deployed Engineer. Stablecoins and onchain settlement. Not "Forward Deployed Engineer" alone, and not a Coinflow-only headline.
- Texas Instruments title on the page: Technical Account Manager (Sales & Solutions Engineering). The rewrite says "Account Executive" / bare "Technical Account Manager" hides that the TI job was sales and solutions engineering. The Coinflow PDF currently says Enterprise Account Executive. See open questions.
- TI dates as two ranges around Theranos: 08/2011–04/2013 and 01/2014–06/2019. Do not publish one continuous 08/2011–06/2019 bar that overlaps another employer.
- aiSports dated 08/2020–08/2026 (the PDF has the month; the rewrite said 2026). Four seasons. Closed range, not "Present." Wind-down is one clause at most.
- Skills to show when the underlying work is already in the resume: Solidity, multi-chain EVM, Cadence, stablecoin rails, non-custodial escrow, TypeScript, JavaScript, Node.js, React, Firebase, GCP (BigQuery, Vertex AI), REST APIs, SQL, production ML. Customer-facing: technical discovery, solution architecture, proof-of-concept delivery.
- LLM and agent tooling: one line, "daily workflow," not a shipped product. The resume does not describe a shipped agent product.
- Do not feature Scouture, LocalFriend, Theranos, GPA, or the phone number. LocalFriend is in the rewrite and is absent from the Coinflow PDF. Leave it off.

Do not publish, because no source gives a real figure:

- Settlement dollar volume and contest count. The rewrite leaves these as `[$X]` and `[Y]`.
- The word "audited." Nothing in the resume says a third party audited the contracts.
- A named onchain FX / CCTP / EURC proof of concept. No repo or writeup was found in this Portfolio project. Searched this repo for `CCTP`, `EURC`, and `settlement receipt`. It is future content, not a project card.

Job-search plan (`/Users/cjcarnicle/Downloads/Job Search Plan.docx`), used only to aim the page: Chicago is an advantage; the page is for the solutions / forward-deployed lane; do not put compensation, the private floor, or runway on the site; do not lead with "developer."

### Design references actually used

Screenshots of https://www.tomweightman.com/ (header, projects, lower page). Patterns to borrow:

- White page, black text, wide margins, no cards-with-shadows chrome.
- Large centered serif name, short gray tagline, text navigation with the current section in bold.
- Bio paragraph on the left, photograph on the right.
- Two-column project images with a bold name and one sentence underneath.
- A two-column list lower on the page (skills and awards).
- A short row of social icons, not a copyright bar.

Do not copy Tom Weightman's biography, project names, press quotes, logos, or photographs. Chris has no sourced press quotes, so the quote row is omitted.

Portrait available now: `src/Assets/IMG_8978.JPG`. Square color photo, orange wall, usable. It does not have to be replaced before launch.

## 2. Recommendation

Build a new Next.js app in this same repository and deploy it to the existing Vercel project that already serves `www.cjcarnicle.com`. Keep the GoDaddy DNS records. Do not stay on Create React App. Do not do an in-place React 17 upgrade.

### Why not the other two options

| Option | Fit | Why it loses |
| --- | --- | --- |
| Stay on Create React App and bump `react-scripts` from 5.0.0 to 5.0.1 | Smallest diff | React deprecated Create React App on 14 February 2025. `react-scripts` 5.0.1 is the newest release and is in maintenance. React 17 is four major versions behind `npm view react version` → 19.3.0 on 24 September 2026. The current UI is being thrown away, so "smallest diff" saves a toolchain that still has to be replaced. |
| Vite + React (`npm view vite version` → 8.3.1) | Good for a static client site, smaller runtime | Meta tags would live in one `index.html` again, which is how the current typos and the dead Open Graph URL survived. Old-path redirects would be a separate `vercel.json`. Fine technically. Weaker fit because this site's job is a shareable public page on Vercel. |
| Next.js App Router (`npm view next version` → 16.3.6, React 19.3.0) | Chosen | Already hosted on Vercel. Metadata, canonical URL, and redirects are part of the app. The page is static. Almost none of the current components are worth porting, so the migration cost is a new page, not a framework rewrite of a large app. |

Use the App Router. Render the page statically. No API routes, no auth, no CMS, no database. Write the app in JavaScript, matching this repo. One content module holds every public string.

Do not add Bootstrap, Tailwind, a component library, particles, a typewriter, or a PDF canvas viewer.

### Information architecture

One long homepage, plus a resume URL.

| URL | What it is |
| --- | --- |
| `/` | The whole page, in the order in section 3. |
| `/resume` | HTML page with the same header and a download link. Also allow direct download of `/christopher-carnicle-resume.pdf`. Do not render the PDF inside a canvas. |
| `/about` | Permanent redirect to `/`. |
| `/project` and `/projects` | Permanent redirect to `/#work`. Next.js cannot put a hash in a `redirects()` destination. Implement `/project` and `/projects` as routes that render the homepage and scroll to `#work` on load. `/about` can be a real redirect to `/` because the homepage leads with the bio. |

Navigation labels: Work, Experience, Resume, Contact. The name links to `/`. No icon buttons in the nav. GitHub is an icon in the footer, not a navbar button.

Mobile nav: the same four text links, wrapping or in a single row under the name. No hamburger, no Bootstrap collapse.

## 3. Sitemap and copy

Voice: first person, short sentences, no "LET ME INTRODUCE MYSELF," no wave emoji. Display name: Christopher Carnicle. "Chris" is fine in prose. File every blocked line; do not publish the bracketed version.

### Ready to publish

**Title in the browser and the H1**

- H1: Christopher Carnicle
- Tagline: Solutions / Forward Deployed Engineer. Stablecoins, tokenized assets, and onchain settlement.
- Location line, under the tagline: Chicago, IL

**About** (left of the photo)

I spent eight years as a Technical Account Manager at Texas Instruments, inside customer engineering teams, from architecture selection through production launch. I grew a four-account book from $1.5M in 2014 to $38.5M in 2018 and finished in the top 5% of US sales.

I then spent six years building aiSports, an onchain fantasy sports platform. I wrote and deployed the Solidity myself: non-custodial escrow, stablecoin entry, and automated payouts across EVM and Flow. The product ran for four NBA seasons, from August 2020 through August 2026, with about 2,000 monthly active users.

One clause, after the aiSports paragraph, not its own section: The consumer-crypto funding market closed, and I wound the company down cleanly.

**Selected work** (`#work`)

Card 1. Image: `src/Assets/Projects/ais.png`, moved to `public/work/aisports.png`.

- Title: aiSports
- Caption: Onchain fantasy sports with stablecoin entry, escrow, and automated payouts. I built the Solidity contracts, the React app, and the REST APIs. Four NBA seasons, about 2,000 monthly active users, 5,000 NFTs, and a production ML pipeline on Vertex AI.
- Links: https://www.aisportspro.com/ and, if it still plays, the existing demo `https://youtu.be/Z_XXRQnep74`. Drop the link if the video is dead. Do not link the old `fantasyball-*.vercel.app` v1 URL.

Card 2. Image: `src/Assets/Projects/nftickets.png`, moved to `public/work/nftickets.png`.

- Title: NFTickets
- Caption: ETH Denver 2022. A one-week prototype for NFT ticketing on Polygon. It won $1,500 in hackathon prizes.
- Links: `https://github.com/ccarnicle/nftickets` and the demo `https://www.youtube.com/watch?v=Ygopuamzetg` if the video still plays.
- This card is the only named hackathon in the repo. The resume's "4 hackathons" stays in Awards without inventing the other three names. The $1,500 figure is from the current site, not the resume. Ship it only after the link check in phase 6; if the repo or video is gone, delete this card and keep the awards line.

Do not ship cards for pdf2sheets, the GPT-4 UI, the Ethereum testnet v1, or the Flow NFT marketplace. The 5,000 NFTs belong in the aiSports caption. `nft.png` can be unused.

**Experience** (`#experience`)

Two entries, TI first. TI is a primary qualification.

- Texas Instruments — Technical Account Manager, Sales & Solutions Engineering. San Francisco Bay Area. 08/2011–04/2013 and 01/2014–06/2019.
  - Grew a four-account book from $1.5M (2014) to $38.5M (2018) by working inside customer engineering teams from architecture selection through production launch.
  - Top 5% of US sales. Texas Instruments High Five Winners Circle.
  - Forecasted revenue across concurrent customer programs and presented technical plans to customer executives.
- aiSports — Founder. 08/2020–08/2026. Four NBA seasons.
  - Designed and deployed non-custodial escrow and automated stablecoin payouts. The company did not take custody of prize pools.
  - Built the React app and the REST APIs that connected users to the contracts, and kept contest windows up, including a stretch with no downtime during contests.
  - Multi-chain: EVM (Solidity) and Flow (Cadence).
  - ML pipeline on GCP Vertex AI and BigQuery for daily NBA player projections.

The "no downtime" sentence is the resume's "0 day downtime" claim, narrowed to contest windows so it matches the bullet. If Chris does not want that claim on a marketing page, delete the clause. Do not strengthen it.

**Technologies** and **Awards**, two columns, then one column below 700px.

Technologies, ready:

- Solidity, multi-chain EVM, Cadence
- TypeScript, JavaScript, Node.js, React
- REST APIs, SQL
- Firebase, GCP (BigQuery, Vertex AI, Storage)
- Stablecoin rails, non-custodial escrow and settlement

Awards and proof, ready:

- Texas Instruments High Five Winners Circle, top 5% of US sales
- Four hackathons and multiple ecosystem grants
- 5,000 NFTs minted
- About 2,000 monthly active users across four NBA seasons

**Contact** (`#contact`)

- Email: cjcarnicle@gmail.com
- LinkedIn: https://www.linkedin.com/in/ccarnicle/
- GitHub: https://github.com/ccarnicle
- Resume: `/christopher-carnicle-resume.pdf`

Footer icons: GitHub and LinkedIn only. Leave Twitter and Instagram off. They are on the current footer and are not part of the job-search header.

**Resume page**

Replace `src/Assets/cj_resume.pdf` with the Coinflow PDF only after the open questions in section 8 are resolved. Until then, the implementation may place the file at `public/christopher-carnicle-resume.pdf` and the page should say the download is the current one-page resume. Do not embed it with `react-pdf`.

Suggested meta description (ready):

Customer-facing engineer for stablecoin and onchain settlement. Eight years as a Technical Account Manager at Texas Instruments, then six years shipping production Solidity, escrow, and automated payouts. Chicago.

### Blocked on Chris

Do not invent these. The page ships without them.

| Item | Why it is blocked | Default if unanswered |
| --- | --- | --- |
| Dollar value settled, number of contests | Rewrite brackets `[$X]` / `[Y]`. Absent from the PDF. | Omit. |
| "Audited" | No third-party audit in any source. | Never use the word. |
| Token name | PDF says "created a token" and does not name it. | Omit the token from the page. |
| Names of the other three hackathons, grant names | Resume says four hackathons and multiple grants. Only NFTickets is named, and only on the old site. | "Four hackathons and multiple ecosystem grants." |
| SDK and webhooks as skill words | Rewrite says he did this work. The PDF names REST APIs and does not name SDK or webhooks. | Publish REST APIs. Leave SDK and webhooks off until confirmed. |
| Onchain FX POC | Not in this repo. | No card, no nav item. |
| Press quotes | None in the sources. | No quote section. |
| TI title string | PDF says Enterprise Account Executive. Rewrite says Technical Account Manager (Sales & Solutions Engineering). | Use the rewrite title on the website. |
| TI date layout | PDF uses one range that overlaps Theranos. Rewrite splits the range. | Publish the split ranges. |
| Phone on the public page | On the PDF. Default in the brief is to keep it off. | Off the website. It can stay on the PDF. |
| Theranos, Scouture, LocalFriend | On a resume, not on a marketing page. Scouture overlaps aiSports. LocalFriend is not on the current PDF. | Omit from the site. |
| Twitter, Instagram | On the old footer only. | Omit. |
| New headshot | `IMG_8978.JPG` is a usable portrait. | Use it. Alt text: "Christopher Carnicle." |

## 4. Visual and interaction spec

White, quiet, editorial. Inspiration is the structure of tomweightman.com, not a copy of it.

### Tokens

- Page background: `#ffffff`
- Primary text: `#1a1a1a`
- Secondary text: `#5c5c5c` (tagline, captions, dates). `#5c5c5c` on white is about 7:1, above the 4.5:1 body-text minimum.
- Hairline: `#e4e4e4`, 1px, used between Experience and the two-column lists
- Links: `#1a1a1a`, underlined. Hover stays black. No blue, no orange, no purple.
- Focus: `outline: 2px solid #1a1a1a; outline-offset: 3px` on `:focus-visible`
- Content width: 960px, centered, horizontal padding 24px on mobile and 32px from 800px up
- Type: `Newsreader` for everything (name, nav, body), with fallback `Iowan Old Style, Palatino, Georgia, serif`. Load Newsreader from a single `next/font/google` call, weights 400 and 600, styles normal and italic. No second family.
- H1: 64px on desktop, 40px on screens under 700px, weight 600, centered, letter-spacing normal
- Tagline: 20px, `#5c5c5c`, centered, italic
- Body: 18px, line-height 1.55, max measure about 62 characters in the bio column
- Nav: 16px, inline, gap 28px, current section `font-weight: 600`
- Project caption: 16px. Project title inside the caption is 600 weight.

### Layout

1. Header block, centered: H1, tagline, location, nav.
2. About: CSS grid, text `1.15fr`, photo `0.85fr`, gap 48px, aligned to the top. Photo is the full column width, height auto, no circle crop, no border. Under 700px, photo comes first, then the paragraphs, one column.
3. Hairline.
4. Work: two equal columns, gap 32px. Image on top, caption underneath. One column under 700px. If the second card is dropped, the first card stays in the left column on desktop; do not stretch it edge to edge.
5. Hairline.
6. Experience: each role is a heading plus a date line in `#5c5c5c`, then bullets. Bullets use a hyphen, matching the reference, not Bootstrap icons.
7. Hairline.
8. Technologies and Awards: two columns, gap 48px. One column under 700px, Technologies first.
9. Footer: icon links, 22px, black, gap 16px, centered, 64px of space above. No "Designed and Developed," no copyright line.

### Remove

- `Particle.js`, `#tsparticles`, `typewriter-effect`, the preloader (`Pre.js`, `#preloader`, the 1200ms timer)
- Dark gradients, purple and orange utility classes, fixed translucent navbar, wave emoji
- Home illustrations (`developer_activity.svg`, `product.svg`, `home-bg-*.jpg`)
- Icon skill grids (`Techstack.js`, `Toolstack.js`)
- GitHub contribution calendar
- Bootstrap and every `react-bootstrap` component
- The PDF.js canvas on `/resume`

### Interaction

- No entrance animation, no parallax, no autoplaying typewriter.
- `prefers-reduced-motion` has nothing to disable, because nothing moves. Do not add scroll effects.
- One H1. Section titles are H2: Work, Experience, Technologies, Awards, Contact.
- Project images need alt text equal to the project name.
- External links: `target="_blank"` and `rel="noopener noreferrer"`.
- The page must be readable with styles off: headings, paragraphs, lists, and links in source order.

## 5. Dependency and migration plan

Versions below are what `npm view <name> version` returned on 24 September 2026. Pin these in `package.json` when implementing. Re-check the day the app is scaffolded; if a later patch exists, take the latest patch of the same major.

### Target dependencies

Runtime:

- `next` 16.3.6
- `react` 19.3.0
- `react-dom` 19.3.0

Dev:

- nothing else required for this page

Remove from `dependencies` and delete the importing files:

- `react-scripts`, `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/user-event`
- `bootstrap`, `react-bootstrap`
- `react-router-dom`
- `react-tsparticles`, `typewriter-effect`, `react-parallax-tilt`
- `react-pdf`, `@react-pdf/renderer`
- `axios`, `react-github-calendar`, `web-vitals`
- `react-icons` (footer uses two inline SVGs, GitHub and LinkedIn)

Do not upgrade those packages first. Delete them. An in-place bump of React 17 inside `react-scripts` 5 is the wrong order: `react-scripts` 5.0.1 does not support React 19.

### Breaking changes, in order

1. Add Next.js beside the old app only long enough to create `app/layout.js`, `app/page.js`, `app/globals.css`, `content/site.js`, and `next.config.js`. Do not import anything from `src/components`.
2. Move the three assets that are still used: `IMG_8978.JPG` → `public/portrait.jpg`, `ais.png` → `public/work/aisports.png`, `nftickets.png` → `public/work/nftickets.png`. Copy the approved resume into `public/christopher-carnicle-resume.pdf`.
3. Switch `package.json` scripts to `next dev`, `next build`, `next start`. Remove `react-scripts`.
4. Delete `src/`, the old `public/index.html`, and `public/manifest.json` after `next build` succeeds. Keep `public/robots.txt` and replace `favicon.png` with a simple black "C" or the existing mark only if it still reads on white. The current favicon was designed for a dark theme; check it on white before keeping it.
5. `next.config.js` does not need `output: 'export'`. Deploy as a normal Next.js app on Vercel so redirects and metadata stay first-class. There is no server code.

`content/site.js` exports the strings and link lists from section 3. Components read that module. No copy inside JSX except punctuation.

Suggested files:

- `app/layout.js` — fonts, metadata, header, footer
- `app/page.js` — sections
- `app/project/page.js` and `app/projects/page.js` — render the home page and scroll to `#work`
- `app/resume/page.js` — short page plus download
- `app/globals.css`
- `content/site.js`
- `next.config.js` — redirect `/about` to `/` with `permanent: true`

### Hosting and domain

Do not change DNS as part of planning or the first implementation pass. The records already point at Vercel.

Cutover, when implementation is ready:

1. In the Vercel project that owns `www.cjcarnicle.com`, confirm the Git connection is `ccarnicle/Portfolio` and production branch is `master`. There is no `.vercel` folder locally, so the project name has to be read in the Vercel dashboard. This was not visible from the repo.
2. Push the Next.js app to a branch. Vercel will build a preview URL. Framework preset: Next.js. Install command: `npm install`. Build command: `next build`. Do not set an output directory of `build` (that is the CRA default and will break the Next deployment).
3. On the preview URL, run the checks in section 6.
4. Merge to `master`. Vercel promotes that deployment to production. `www.cjcarnicle.com` and the apex 308 stay as they are, because the domain is already attached to this project.
5. If the dashboard shows the domain on a different project than the one connected to this repo, attach `cjcarnicle.com` and `www.cjcarnicle.com` to the correct project and only then remove them from the old one. Still no GoDaddy change: both names already resolve to Vercel `76.76.21.21`.
6. After production, request a fresh fetch of `/` so the old CRA HTML is not stuck. Response headers today include `x-vercel-cache: HIT` and `cache-control: public, max-age=0, must-revalidate`. A new deployment should invalidate that. Confirm the HTML no longer contains `create-react-app` or `portfolio-ccanicle.vercel.app`.
7. HTTPS and HSTS are already on (`strict-transport-security: max-age=63072000`). Leave them.

Canonical host is `https://www.cjcarnicle.com`. Apex already redirects there. Do not also redirect www to apex.

### SEO and sharing

Set these in `app/layout.js` `metadata`, not in a hand-written `index.html`.

- `title`: Christopher Carnicle — Solutions / Forward Deployed Engineer
- `description`: the meta description in section 3
- `metadataBase`: `https://www.cjcarnicle.com`
- `alternates.canonical`: `/`
- Open Graph: `type: website`, `url: https://www.cjcarnicle.com/`, same title and description, image `/og.png`
- Twitter: `summary_large_image`, same title, description, and image
- `themeColor`: `#ffffff`
- Icons: `/favicon.png` (or `app/icon.png`)

`/og.png` is a new 1200×630 image: white background, "Christopher Carnicle", and the tagline in Newsreader. Do not reuse the Firebase `websitepreview.png`.

`public/robots.txt` can stay `Allow: /`. Add no sitemap unless it is a one-URL file; a sitemap is optional for a single page.

Delete both descriptions and the dead `og:url` from the old `index.html` by deleting that file.

## 6. Phased implementation

Each phase is one working session. The site can ship at the end of phase 5 without any blocked line from section 3.

### Phase 1 — Scaffold

Outcome: `next dev` serves a blank white page with the H1 and tagline.

Touches: `package.json`, `package-lock.json`, `next.config.js`, `app/layout.js`, `app/page.js`, `app/globals.css`, `content/site.js`.

Done when: `next build` succeeds, React 17 and `react-scripts` are gone from `package.json`, and `npm ls react-scripts` is empty.

### Phase 2 — Page

Outcome: homepage matches section 3 and section 4, using only ready copy and `portrait.jpg`.

Touches: `app/page.js`, `app/globals.css`, `content/site.js`, `public/portrait.jpg`, `public/work/*`.

Done when: desktop and a 390px-wide layout show the header, bio plus photo, one or two projects, both jobs, both lists, and the footer. No particle canvas, no typewriter, no dark background, no Bootstrap class in the DOM.

### Phase 3 — Resume, redirects, metadata

Outcome: old URLs do not 404, the resume downloads, sharing tags are correct.

Touches: `app/resume/page.js`, `app/project/page.js`, `app/projects/page.js`, `next.config.js`, `app/layout.js`, `public/christopher-carnicle-resume.pdf`, `public/og.png`, `public/favicon.png`.

Acceptance:

- `/about` ends at `/`
- `/project` and `/projects` show the homepage and land on the work section
- `/resume` and `/christopher-carnicle-resume.pdf` both work
- View source on `/` contains the new title and description and does not contain `create-react-app`, `portfolio-ccanicle.vercel.app`, or `buiilt`
- Resume file is the approved PDF, not `src/Assets/cj_resume.pdf`

### Phase 4 — Delete the old app

Outcome: the CRA tree is gone.

Delete: `src/`, `public/index.html`, `public/manifest.json`, template images, `Soumyajit_Behera-BIT_MESRA.pdf`, the old resume PDF.

Done when: `next build` still succeeds and a search of the repo finds no `react-tsparticles`, `typewriter-effect`, `Etherium`, `3.5k`, or `$40M`.

### Phase 5 — Preview deploy

Outcome: a Vercel preview URL serves the new app.

Done when: the preview passes the verification list below. Do not attach a new domain. Do not edit GoDaddy.

### Phase 6 — Production and link check

Outcome: `https://www.cjcarnicle.com/` is the new page.

Check every link a hiring manager will click:

- mailto
- LinkedIn and GitHub
- aisportspro.com
- NFTickets GitHub and YouTube, if that card shipped
- aiSports YouTube, if that link shipped
- resume PDF opens and is the new one-page file
- `/about`, `/project`, `/resume` on the production host

Lighthouse on the preview, mobile: Performance, Accessibility, and SEO each at or above 90. Best Practices is informational. Fix anything that drops Accessibility or SEO under 90 before production.

Confirm in production HTML: white `theme-color`, canonical `https://www.cjcarnicle.com/`, no CRA description.

## 7. Verification

Local:

- `npm run dev`, open `/`, `/about`, `/project`, `/projects`, `/resume`
- Resize to 390px and to 1280px
- Tab through nav, email, project links, and footer. Focus ring is visible.
- Disable CSS and confirm the H1 and sections are still in order
- Search the document for `tsparticles`, `typewriter`, `#0c0513`, and `Hi There`

Preview and production:

- `curl -sI https://www.cjcarnicle.com/` stays on www and is HTML from the new deployment
- `curl -sI https://cjcarnicle.com/` is still a 308 to www
- View source matches the metadata in section 5

## 8. Risks

- The Coinflow PDF and the rewrite doc disagree on the TI title and on whether 2011–2019 is one job span. Publishing either version without noticing will contradict the PDF Chris is emailing. The site default is the rewrite. The downloadable PDF should be edited to the same title and the same split dates before it is linked, or the site should not offer that PDF yet.
- The PDF's TI range overlaps Theranos. The public page avoids that by using the split dates and by not mentioning Theranos.
- "0 day downtime," "created a token," and the $1,500 hackathon prize are easy to overstate. The copy in section 3 is as far as those claims should go.
- Production Vercel project name is not in the repo. Deploying a second project and attaching the domain to it would be a DNS-level mistake even though the records already point at Vercel. Read the dashboard before the first push.
- `portfolio-ccanicle.vercel.app` is already dead. Removing it from meta tags is required. Do not try to revive that hostname.
- Old blog and social previews will show the Firebase image until the new `og.png` is cached. That is acceptable after the tags are correct.
- `git` on this machine currently fails until the Xcode license is accepted. Implementation commits need a working `git`.

## 9. Open questions

Defaults are what implementation should do if Chris does not answer. None of these block phases 1, 2, or 4.

1. TI title on the public page: Technical Account Manager (Sales & Solutions Engineering), or Enterprise Account Executive as on the Coinflow PDF? Default: Technical Account Manager (Sales & Solutions Engineering).
2. Should the downloadable PDF be updated to that same title and to the split TI dates before it is linked? Default: yes. Do not link `CJ Resume FDE Coinflow.pdf` until then. A resume page can say the file is coming and still ship the rest of the site.
3. Include the contest-window uptime sentence? Default: yes, worded as in section 3.
4. Keep the NFTickets card? Default: yes, after the GitHub and YouTube links resolve.
5. Public phone number? Default: no.
6. Footer: GitHub and LinkedIn only? Default: yes.
7. Replace the orange-wall portrait? Default: no, use `IMG_8978.JPG`.
8. Any settlement dollar figure, contest count, token name, or extra hackathon names to add? Default: leave them off.
9. Is there an onchain FX repo outside this Portfolio folder that should become a card later? Default: not in this launch.
