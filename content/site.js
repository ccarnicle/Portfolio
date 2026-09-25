export const site = {
  name: "Christopher Carnicle",
  tagline:
    "Solutions / Forward Deployed Engineer. Stablecoins, tokenized assets, and onchain settlement.",
  location: "Chicago, IL",
  metaDescription:
    "Customer-facing engineer for stablecoin and onchain settlement. Eight years as a Technical Account Manager at Texas Instruments, then six years shipping production Solidity, escrow, and automated payouts. Chicago.",
  pageTitle: "Christopher Carnicle — Solutions / Forward Deployed Engineer",
  email: "cjcarnicle@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ccarnicle/",
  github: "https://github.com/ccarnicle",
};

export const navItems = [
  { label: "Work", href: "/#work", sectionId: "work" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Resume", href: "/resume", sectionId: null },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const bioParagraphs = [
  "I spent eight years as a Technical Account Manager at Texas Instruments, inside customer engineering teams, from architecture selection through production launch. I grew a four-account book from $1.5M in 2014 to $38.5M in 2018 and finished in the top 5% of US sales.",
  "I then spent six years building aiSports, an onchain fantasy sports platform. I wrote and deployed the Solidity myself: non-custodial escrow, stablecoin entry, and automated payouts across EVM and Flow. The product ran for four NBA seasons, from August 2020 through August 2026, with about 2,000 monthly active users.",
  "The consumer-crypto funding market closed, and I wound the company down cleanly.",
];

export const projects = [
  {
    title: "aiSports",
    image: "/work/aisports.png",
    caption:
      "Onchain fantasy sports with stablecoin entry, escrow, and automated payouts. I built the Solidity contracts, the React app, and the REST APIs. Four NBA seasons, about 2,000 monthly active users, 5,000 NFTs, and a production ML pipeline on Vertex AI.",
    links: [
      { label: "aisportspro.com", href: "https://www.aisportspro.com/" },
      { label: "Demo", href: "https://youtu.be/Z_XXRQnep74" },
    ],
  },
  {
    title: "NFTickets",
    image: "/work/nftickets.png",
    caption:
      "ETH Denver 2022. A one-week prototype for NFT ticketing on Polygon. It won $1,500 in hackathon prizes.",
    links: [
      { label: "GitHub", href: "https://github.com/ccarnicle/nftickets" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=Ygopuamzetg" },
    ],
  },
];

export const experience = [
  {
    company: "Texas Instruments",
    role: "Technical Account Manager, Sales & Solutions Engineering",
    location: "San Francisco Bay Area",
    dates: "08/2011–04/2013 and 01/2014–06/2019",
    bullets: [
      "Grew a four-account book from $1.5M (2014) to $38.5M (2018) by working inside customer engineering teams from architecture selection through production launch.",
      "Top 5% of US sales. Texas Instruments High Five Winners Circle.",
      "Forecasted revenue across concurrent customer programs and presented technical plans to customer executives.",
    ],
  },
  {
    company: "aiSports",
    role: "Founder",
    location: null,
    dates: "08/2020–08/2026. Four NBA seasons.",
    bullets: [
      "Designed and deployed non-custodial escrow and automated stablecoin payouts. The company did not take custody of prize pools.",
      "Built the React app and the REST APIs that connected users to the contracts, and kept contest windows up, including a stretch with no downtime during contests.",
      "Multi-chain: EVM (Solidity) and Flow (Cadence).",
      "ML pipeline on GCP Vertex AI and BigQuery for daily NBA player projections.",
    ],
  },
];

export const technologies = [
  "Solidity, multi-chain EVM, Cadence",
  "TypeScript, JavaScript, Node.js, React",
  "REST APIs, SQL",
  "Firebase, GCP (BigQuery, Vertex AI, Storage)",
  "Stablecoin rails, non-custodial escrow and settlement",
];

export const awards = [
  "Texas Instruments High Five Winners Circle, top 5% of US sales",
  "Four hackathons and multiple ecosystem grants",
  "5,000 NFTs minted",
  "About 2,000 monthly active users across four NBA seasons",
];

export const resumePage = {
  heading: "Resume",
  body:
    "The one-page PDF is being updated to match this site. Email me for the current version.",
};
