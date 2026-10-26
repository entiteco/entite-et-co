// English version of src/data/expertises.ts (same structure, same slugs and ids).
// Links are written without a language prefix: components localise them.
import type { Cta, Expertise } from './expertises';

const portfolioCta = (categorie: 'data' | 'web' | 'textile'): Cta => ({
  label: 'See the work in the Portfolio',
  href: `/portfolio?categorie=${categorie}`,
});

export const dataIaEn: Expertise = {
  slug: 'data-ia',
  pole: 'XENA',
  navLabel: 'Data & AI',
  seo: {
    title: 'Data Engineering, AI & Analytics Expertise | Entité & Co',
    description:
      'From database architecture to deploying generative AI models. Discover the end-to-end data expertise of Entité & Co.',
  },
  hero: {
    eyebrow: 'Expertise — Data & AI',
    title: 'Data Engineering & Artificial Intelligence Expertise',
    intro:
      'AI drives innovation, but data is its fuel. At Entité & Co, the **XENA** unit masters the entire value chain: from building robust data infrastructure (Data Engineering) to deploying custom predictive models (MLOps).',
    cta: { label: 'Talk about my Data project', href: '/contact?sujet=data-ia' },
  },
  highlight: {
    title: 'End-to-end Data: Structure, Predict, Steer',
    intro: 'A high-performing data ecosystem rests on three inseparable pillars:',
    items: [
      '**Data Engineering (Structure):** Build solid foundations, from databases to Data Lakes, to guarantee the availability and security of information.',
      '**Data Science & AI (Predict):** Develop Machine Learning algorithms and leverage generative AI to automate and anticipate.',
      '**Data Analysis (Steer):** Turn raw data into visual, interactive dashboards for informed strategic decisions.',
    ],
    cta: { label: 'See the unit’s projects', href: '#projets' },
  },
  sectionsHeading: {
    eyebrow: 'Areas of expertise',
    title: 'Three units, one value chain',
    intro: 'From storage to decision: every building block is designed to fit with the others.',
  },
  useCases: {
    title: 'Projects & Use Cases',
    intro: 'Projects delivered end to end, from the data pipeline to the model in production.',
    projects: [
      { id: 'data-ia-urban', name: 'Urban Data Explorer', stack: ['Medallion Architecture', 'PostgreSQL', 'Docker'] },
      { id: 'data-ia-aisca', name: 'AISCA', stack: ['Python', 'RAG', 'SBERT', 'LLM'] },
      { id: 'data-ia-churn', name: 'Churn Prediction', stack: ['Python', 'Machine Learning', 'FastAPI', 'MLOps'] },
      { id: 'data-ia-my-social-network', name: 'My Social Network API', stack: ['Node.js', 'Express', 'MongoDB', 'JWT'] },
    ],
  },
  sections: [
    {
      id: 'data-engineering-cloud',
      title: 'Data Engineering & Cloud Architecture',
      intro:
        'The technical foundation of your business. We design scalable architectures to collect, clean and store your large-scale data securely.',
      groups: [
        {
          title: 'Data Architecture & Storage',
          items: [
            '**Databases & Data Lakes:** Design of relational (SQL) and non-relational (NoSQL) databases suited to your data flows.',
            '**ETL / ELT Pipelines:** Automated flows to extract, transform and load data (Data Integration).',
          ],
        },
        {
          title: 'Cloud & Industrialisation (MLOps)',
          items: [
            '**Continuous Deployment (CI/CD):** Automated releases to guarantee the reliability of applications and AI models.',
            '**Scalable Infrastructure:** Containerisation (Docker, Kubernetes) and cloud resource management (Infrastructure as Code).',
          ],
        },
      ],
    },
    {
      id: 'data-science-ia',
      title: 'Data Science & AI Development',
      intro:
        'Advanced algorithmic solutions to solve complex business problems, optimise your processes and create new growth drivers.',
      groups: [
        {
          title: 'Artificial & Generative Intelligence',
          items: [
            '**Generative AI (LLM & RAG):** Integration of foundation models with your private data for innovative, secure solutions.',
            '**Natural Language Processing (NLP):** Sentiment analysis, semantic classification and knowledge extraction.',
          ],
        },
        {
          title: 'Machine Learning & Predictive Analytics',
          items: [
            '**Predictive Models:** Behaviour forecasting, scoring (e.g. churn prediction) and customer segmentation.',
            '**Evaluation & Optimisation:** Model comparison and hyperparameter tuning to maximise performance and energy efficiency.',
          ],
        },
      ],
    },
    {
      id: 'data-analyst-bi',
      title: 'Data Analysis & Governance',
      intro:
        'Make your data speak, in full compliance. We turn your figures into visual strategic assets while keeping them secure.',
      groups: [
        {
          title: 'Business Intelligence & Dataviz',
          items: [
            '**Interactive Dashboards:** Real-time steering interfaces built with Power BI and Streamlit.',
            '**Exploratory Analysis:** Identifying hidden trends and extracting actionable insights for governance.',
          ],
        },
        {
          title: 'Data Governance & Security',
          items: [
            '**Data Management:** A data lifecycle (traceability, archiving) compliant with regulations (GDPR).',
            '**Quality & Audit:** Continuous monitoring to ensure the data used is relevant and clean.',
          ],
        },
      ],
    },
  ],
  stack: {
    title: 'Tech Stack & Tools',
    intro:
      'A modern toolset to guarantee the reliability, scalability and performance of your data projects:',
    groups: [
      { label: 'Engineering & DBs', items: ['PostgreSQL', 'MongoDB', 'Redis', 'PySpark'] },
      { label: 'MLOps & Cloud', items: ['Docker', 'Kubernetes', 'Terraform', 'FastAPI', 'AWS / Vercel'] },
      { label: 'Data Science & AI', items: ['Scikit-Learn', 'XGBoost', 'SBERT / Hugging Face', 'Gemini API', 'Pandas'] },
      { label: 'Dataviz & BI', items: ['Power BI', 'Streamlit', 'Plotly', 'MapLibre'] },
    ],
  },
  closing: {
    title: 'From raw data to automated intelligence.',
    text: 'Full mastery of the data value chain, from server architecture to the final dashboard.',
    cta: portfolioCta('data'),
  },
};

export const creationDigitaleEn: Expertise = {
  slug: 'creation-digitale',
  pole: 'KVN HGS',
  navLabel: 'Digital Design',
  seo: {
    title: 'Digital Design, Web Design & E-commerce | Entité & Co',
    description:
      'Grow your online identity. From web design to e-commerce, graphic design and social media, trust your image to the KVN HGS studio.',
  },
  hero: {
    eyebrow: 'Expertise — Digital Design',
    title: 'Digital Design Studio',
    intro:
      'Your online presence is the first point of contact between you and your future customers. It has to be flawless. At Entité & Co, the **KVN HGS** creative studio designs custom digital ecosystems that combine aesthetics (UI), usability (UX) and conversion performance.',
    cta: { label: 'Talk about my Web project', href: '/contact?sujet=creation-digitale' },
  },
  sectionsHeading: {
    eyebrow: 'Know-how',
    title: 'From pixel to conversion',
    intro: 'Two complementary units to build, grow and embody your brand online.',
  },
  sections: [
    {
      id: 'web-e-commerce',
      title: 'Launch and grow your business (Web & E-commerce)',
      intro:
        'From corporate showcase sites to full online stores, we build high-performing platforms optimised for search engines.',
      groups: [
        {
          title: 'Web Design & Development (Showcase Sites)',
          items: [
            '**UI/UX & Mobile First Design:** Modern, user-centred interfaces offering smooth, intuitive navigation on every screen (smartphones, tablets, desktops).',
            '**Custom Development:** Proven CMSs (WordPress) and modern web technologies for fast, secure sites you fully control (admin interface).',
            '**SEO Optimisation:** Search best practices built in from the first line of code, and structured content (text & images) to guarantee your visibility on Google.',
          ],
        },
        {
          title: 'E-commerce & Marketplaces',
          items: [
            '**High-performing Online Stores:** Robust e-commerce sites built with PrestaShop or WooCommerce to boost your online sales.',
            '**Optimised Shopping Experience:** Frictionless customer journeys, attractive product pages, and payment (Stripe, PayPal) and shipping setup.',
            '**Marketplace Strategy:** Deployment, synchronisation and integration of your catalogues on major marketplaces to multiply your acquisition channels.',
          ],
        },
      ],
      cta: { label: 'Talk about my Web project', href: '/contact?sujet=creation-digitale' },
    },
    {
      id: 'graphisme-social-media',
      title: 'Embody your brand (Graphic Design & Social Media)',
      intro:
        'A strong visual identity and well-managed communication are essential to stand out and build a loyal community.',
      groups: [
        {
          title: 'Graphic Design & Visual Identity',
          items: [
            '**Branding:** Striking, modern logos and complete brand guidelines to ensure a consistent image across all your media.',
            '**Communication Materials:** Digital assets (banners, illustrations) and print design (flyers, posters, merchandise).',
          ],
        },
        {
          title: 'Social Media & Content Strategy',
          items: [
            '**Audit & Strategy:** In-depth analysis of your current presence and an editorial line aligned with your business goals.',
            '**Content Creation:** Attractive visuals, engaging posts and community management.',
            '**Editorial Planning:** Structured, scheduled communication to keep a constant link with your audience and build loyalty.',
          ],
        },
      ],
    },
  ],
  stack: {
    title: 'Creative Stack & Tools',
    intro: 'We master industry standards to deliver finished products of impeccable quality:',
    groups: [
      { label: 'Web & E-commerce', items: ['WordPress', 'WooCommerce', 'PrestaShop', 'Figma (UI Prototyping)'] },
      { label: 'Visual Design', items: ['Adobe Suite', 'Photoshop', 'Illustrator', 'InDesign'] },
      { label: 'Social Media', items: ['Audience analytics tools', 'Content creation', 'Scheduling'] },
    ],
  },
  closing: {
    title: 'Grow your online identity.',
    text: 'From web design to e-commerce, graphic design and social media.',
    cta: portfolioCta('web'),
  },
};

export const impressionTextileEn: Expertise = {
  slug: 'impression-textile',
  pole: 'SFB',
  navLabel: 'Textile Printing',
  seo: {
    title: 'Textile Printing, Merchandising & Promotional Items | Entité & Co',
    description:
      'Bring your brand to life. Discover the SFB expertise of Entité & Co: textile marking (screen printing, embroidery) and custom promotional items.',
  },
  hero: {
    eyebrow: 'Expertise — Textile Printing',
    title: 'Textile Printing & Merchandising',
    intro:
      'Digital connects people, physical leaves a mark. The **SFB** unit turns your visual identity into tangible products. Whether you want to launch your own clothing brand, equip your team or prepare an event, we produce your physical media to a professional standard.',
    cta: { label: 'Request a textile quote', href: '/contact?sujet=impression-textile' },
  },
  sectionsHeading: {
    eyebrow: 'Know-how',
    title: 'From file to finished product',
    intro: 'The right marking technique and item for every design, every budget and every use.',
  },
  sections: [
    {
      id: 'marquage-textile',
      title: 'Custom Textile Marking',
      intro:
        'From promotional T-shirts to premium hoodies, we dress your teams and communities with the marking technique best suited to your design and budget.',
      groups: [
        {
          title: 'Our textile printing techniques',
          items: [
            '**Embroidery:** The premium, long-lasting touch. Ideal for corporate polo shirts, caps (e.g. Black Hound Sports) and jackets.',
            '**Screen Printing & Flock:** The industry standard, perfect for large runs, clean logos and solid colours.',
            '**Digital Printing (DTG) & DTF (Direct to Film):** The perfect solution for complex designs, photographs or small runs, with vivid colours and no loss of detail (e.g. Kayou T-shirts).',
            '**Sublimation:** A technique that dyes the fibre itself, particularly suited to sportswear and technical textiles.',
          ],
        },
      ],
      cta: { label: 'Request a textile quote', href: '/contact?sujet=impression-textile' },
    },
    {
      id: 'objets-publicitaires',
      title: 'Promotional Items & Accessories (Goodies)',
      intro:
        'Extend your brand beyond the screen with useful, memorable items that are perfect for events.',
      groups: [
        {
          title: 'Our physical communication media',
          items: [
            '**Reusable Cups (Ecocups):** A must for festivals, trade shows and corporate events (e.g. CFDT / Enedis project). Eco-friendly and 100% customisable.',
            '**Stickers & Decals:** Custom printing and die-cutting of your logos so your community can show you off everywhere.',
            '**Printed Items & Goodies:** Mugs, accessories and various media to build loyalty with your customers and partners.',
          ],
        },
      ],
    },
  ],
  ecosystem: {
    title: 'The strength of the Entité & Co ecosystem',
    paragraphs: [
      'Why choose us over a simple online printer? Because the digital design unit (**KVN HGS**) and the printing unit (**SFB**) work hand in hand. We design your logos and graphics with the technical constraints of printing in mind from the very first sketch.',
      '**The result:** No more bad surprises, dull colours or files rejected by the printer. What you see on screen is what you hold in your hands.',
    ],
  },
  closing: {
    title: 'Bring your brand to life.',
    text: 'Textile marking (screen printing, embroidery) and custom promotional items.',
    cta: portfolioCta('textile'),
  },
};

export const expertisesEn = [dataIaEn, creationDigitaleEn, impressionTextileEn] as const;
