export const site = {
  name: "Christopher J. Carnicle",
  tagline: "Solutions Engineer, Entrepreneur and Photographer",
  location: "Chicago, IL",
  metaDescription:
    "Solutions engineer in Chicago. Seven years as a Technical Account Manager at Texas Instruments, then six years shipping production Solidity, escrow, and automated payouts at aiSports.",
  pageTitle: "Christopher J. Carnicle — Solutions Engineer, Entrepreneur and Photographer",
  email: "cjcarnicle@gmail.com",
  linkedIn: "https://www.linkedin.com/in/ccarnicle/",
  github: "https://github.com/ccarnicle",
  resumePdf: "/christopher-carnicle-resume.pdf",
};

export const navItems = [
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Resume", href: "/resume", sectionId: null },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export const bioParagraphs = [
  "I spent seven years as a Technical Account Manager at Texas Instruments, working alongside customer engineering teams from architecture selection through production launch. I grew four large enterprise accounts from $1.5M in 2014 to $38.5M in 2018 and finished in the top 5% of US sales.",
  "I then spent six years building aiSports, an onchain fantasy sports platform. I wrote and deployed the smart contracts: escrow, stablecoin entry, and automated payouts across the Ethereum and Flow blockchains. The aiSports web app ran for four NBA seasons, from August 2020 through August 2026, with about 2,000 monthly active users.",
];

export const projects = [
  {
    title: "aiSports",
    image: "/work/aisports.png",
    imageLayout: "wide",
    caption:
      "Onchain fantasy sports with stablecoin entry, escrow, and automated payouts. I built the Solidity contracts, the React app, and the REST APIs. Four NBA seasons, about 2,000 monthly active users, 5,000 NFTs, and a production ML pipeline on Vertex AI.",
    links: [
      { label: "aisportspro.com", href: "https://www.aisportspro.com/" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=d5YoHyROxCs" },
    ],
  },
  {
    title: "Caddie Vance",
    image: "/work/caddie-vance-phone.jpg",
    imageLayout: "portrait",
    width: 473,
    height: 1024,
    caption:
      "An iOS golf coach that remembers your game and turns range time into a plan. I built the Expo app, the Express AI gateway, and the Firestore memory layer. It improves a user's golf game with streaming chat, swing analysis, a coach profile, and AI-drafted practice sessions.",
    links: [],
  },
  {
    title: "AI Generated NFTs",
    image: "/work/nfts.png",
    imageLayout: "wide",
    caption:
      "Using Stable Diffusion, I created 5,000 AI-generated digital collectibles on Flow. They feature unique images of 20 NBA players in 5 scenarios.",
    links: [
      {
        label: "Marketplace",
        href: "https://www.flowty.io/collection/0xabe5a2bf47ce5bf3/aiSportsMinter",
      },
      {
        label: "Contract",
        href: "https://flow-view-source.com/mainnet/account/0xabe5a2bf47ce5bf3/contract/aiSportsMinter",
      },
    ],
  },
  {
    title: "NFTickets",
    image: "/work/nftickets.png",
    imageLayout: "wide",
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
    company: "aiSports",
    role: "CEO & Founder",
    location: null,
    dates: "08/2020–08/2026. Four NBA seasons.",
    bullets: [
      "Designed and deployed non-custodial escrow and automated stablecoin payouts. The company did not take custody of prize pools.",
      "Built the React app and the REST APIs that connected users to the contracts, and kept contest windows up, including a stretch with no downtime during contests.",
      "Multi-chain: EVM (Solidity) and Flow (Cadence).",
      "ML pipeline on GCP Vertex AI and BigQuery for daily NBA player projections.",
    ],
  },
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
    company: "Theranos",
    role: "Global Supply Manager",
    location: "Palo Alto",
    dates: "04/2013–12/2013",
    bullets: [
      "Oversaw supply chain and inventory of over 500 components across 30 circuit boards and 3 end products.",
      "Created and maintained an organizational tool for component tracking, forecasting, vendor share, and availability.",
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
  {
    id: "ti",
    parts: ["Texas Instruments High Five Winners Circle, top 5% of US sales"],
  },
  {
    id: "hackathons",
    parts: [
      "Five ",
      {
        label: "hackathons",
        href: "https://x.com/ccarnicle/status/1989088374158946365?s=20",
      },
      " and multiple ecosystem grants",
    ],
  },
  {
    id: "flow",
    parts: [
      {
        label: "Feature story on Flow",
        href: "https://flow.com/post/from-silicon-valley-sales-to-consumer-defi-my-founders-journey",
      },
      ", from Silicon Valley sales to consumer DeFi",
    ],
  },
];

export const resumePage = {
  heading: "Resume",
  body: "One-page resume.",
};
