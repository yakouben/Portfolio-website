/**
 * JP & HP Consulting - Complete Content Data
 * Extract this content and integrate into your template while preserving design & fonts
 */

export const jphpContent = {
  // ===== BRAND & NAVIGATION =====
  brand: {
    name: "JP & HP Consulting",
    tagline: "Direction Commerciale & Excellence Opérationnelle",
    fullTagline: "L'Ecosystème Commercial 360° — Sell-In, Sell-Out & Digital",
    description: "L'ensemble des leviers activés pour transformer votre marque en leader de son marché.",
  },

  navigation: {
    links: [
      { label: "Approche", href: "#approche" },
      { label: "Sell-In", href: "#sellin" },
      { label: "Sell-Out", href: "#sellout" },
      { label: "Digital", href: "#digital" },
      { label: "Médias", href: "#media" },
      { label: "Marques", href: "#marques" },
      { label: "Équipe", href: "#experts" },
    ],
    cta: {
      label: "Nous contacter",
      href: "#contact",
    },
  },

  // ===== HERO SECTION =====
  hero: {
    pretitle: "Direction Commerciale & Excellence Opérationnelle",
    title: "JP & HP Consulting",
    subtitle:
      "L'Ecosystème Commercial 360° — Sell-In, Sell-Out & Digital.\nL'ensemble des leviers activés pour transformer votre marque en leader de son marché.",
    cta_primary: {
      label: "Prendre rendez-vous",
      href: "#contact",
    },
    cta_secondary: {
      label: "Découvrir notre approche",
      href: "#approche",
    },
    stats: [
      {
        number: "+100",
        label: "Agents commerciaux",
      },
      {
        number: "360°",
        label: "Couverture marché",
      },
      {
        number: "30",
        label: "Conseillères beauté",
      },
    ],
  },

  // ===== PILLIERS SECTION =====
  pilliers: [
    {
      number: "01",
      title: "Sell-In",
      description: "Implantation & réseau national de +100 agents commerciaux",
      href: "#sellin",
    },
    {
      number: "02",
      title: "Sell-Out",
      description: "Activation, formation & animation point de vente",
      href: "#sellout",
    },
    {
      number: "03",
      title: "Digital",
      description: "Conversion, social media & e-réputation — LSR Agence",
      href: "#digital",
    },
    {
      number: "04",
      title: "Médias",
      description: "Visibilité indoor & outdoor ciblée — Stratego",
      href: "#media",
    },
  ],

  // ===== APPROCHE SECTION =====
  approche: {
    eyebrow: "Notre vision",
    title: "Une vision forgée chez les leaders",
    titleHighlight: "chez les leaders",
    body: "JP & HP Consulting est un hub stratégique 360° dédié à la Direction Commerciale et à l'Excellence Opérationnelle. Nous accompagnons les marques de beauté, de soin et de wellness dans leur conquête du marché français, de la pharmacie au digital.",
    body2:
      "Notre comité d'experts multidisciplinaire réunit des profils forgés chez les plus grandes maisons : Darphin (Estée Lauder), Alès Groupe, Office Depot, Schweppes et Yoplait.",
    quote: '"Guider l\'entreprise dans la voie de la réussite à court, moyen et long terme."',
    timeline: [
      {
        brand: "Schweppes / Yoplait",
        role: "FMCG Strategy — grands comptes",
      },
      {
        brand: "Office Depot",
        role: "Structure B2B France",
      },
      {
        brand: "Darphin",
        role: "Excellence — Groupe Estée Lauder",
      },
      {
        brand: "Alès Groupe",
        role: "Phyto / Lierac",
      },
      {
        brand: "Retailer Mission",
        role: "Restructuration réseau",
      },
      {
        brand: "JP & HP Consulting",
        role: "Hub Stratégique 360°",
        isCurrent: true,
      },
    ],
  },

  // ===== TEAM/EXPERTS SECTION =====
  experts: {
    eyebrow: "Le comité",
    title: "Un comité d'experts multidisciplinaire",
    titleHighlight: "multidisciplinaire",
    members: [
      {
        initials: "JP",
        name: "Jean Paul Pinto",
        role: "Dirigeant JP & HP. Expert Stratégie Retail & Pharma. Ex-Darphin, Alès Groupe.",
      },
      {
        initials: "IG",
        name: "Isabelle Grasset",
        role: "Experte Formation & Excellence. Ex-Darphin. Maîtrise du protocole de soin & conseil.",
      },
      {
        initials: "ON",
        name: "Odette Nahami",
        role: "Fondatrice LSR Agence. Experte Digital, Social Media & Conversion UGC.",
      },
      {
        initials: "YT",
        name: "Yann Tanguy",
        role: "Président STRATEGO. Expert Visibilité Média Indoor & Outdoor ciblée.",
      },
      {
        initials: "VP",
        name: "Véronique Patti",
        role: "Synthèse opérationnelle. Pilotage du réseau de conseillères de beauté France.",
      },
    ],
  },

  // ===== SELL-IN SECTION =====
  sellin: {
    eyebrow: "01 — Sell-In",
    title: "Implantation & Réseau national",
    titleHighlight: "Réseau national",
    description:
      "Force de frappe nationale couvrant l'ensemble du territoire français avec un maillage officinal complet et une gestion multiculturelle des marques.",
    stat: "+100",
    statLabel: "Agents commerciaux sur le territoire",
    features: [
      "Maillage officinal complet sur toute la France",
      "Gestion multiculturelle des marques et des équipes",
      "Feuille de route et politique de moyens adaptées à chaque marque",
    ],
    imageCaption: "Rayon beauté — pharmacie & parfumerie",
  },

  // ===== SELL-OUT SECTION =====
  sellout: {
    eyebrow: "02 — Sell-Out",
    title: "Activation & Formation",
    titleHighlight: "Formation",
    description:
      "Sous l'impulsion d'Isabelle Grasset et Véronique Patti, nous transformons chaque point de vente en vecteur de croissance durable.",
    cards: [
      {
        icon: "✦",
        title: "30 Conseillères Beauté",
        body: "Recrutement & animation point de vente — réseau pilotage France par Véronique Patti. Déploiement national coordonné.",
      },
      {
        icon: "◈",
        title: "Formation Phygitale",
        body: "Modules présentiel en officine et e-learning. Maîtrise des protocoles de soin & conseil développée par Isabelle Grasset, ex-Darphin.",
      },
      {
        icon: "◎",
        title: "Objectif Fidélisation",
        body: "Transformer chaque visite en vente et fidéliser durablement. Suivi KPIs, reporting et ajustement continu des dispositifs.",
      },
    ],
  },

  // ===== DIGITAL SECTION =====
  digital: {
    eyebrow: "03 — Digital · LSR Agence",
    title: "Conversion & Visibilité",
    titleHighlight: "Visibilité",
    description:
      "Construire une marque aujourd'hui est impossible sans une stratégie digitale robuste. Odette Nahami et son équipe LSR Agence prennent en charge l'intégralité de votre présence digitale.",
    features: [
      {
        label: "Sites internet orientés ventes",
        description: "conception, développement e-commerce beauté",
      },
      {
        label: "UGC, Influence & Social Ads",
        description: "contenus créateurs, publicités sociales, stratégie plateformes",
      },
      {
        label: "Newsletters & E-réputation",
        description: "CRM, gestion avis, notoriété en ligne",
      },
    ],
    funnel: [
      {
        label: "Awareness",
        description: "Notoriété de marque",
        width: 100,
      },
      {
        label: "Interest",
        description: "Contenu & engagement",
        width: 88,
      },
      {
        label: "Consideration",
        description: "UGC, influence",
        width: 74,
      },
      {
        label: "Conversion",
        description: "Social Ads, SEO",
        width: 58,
      },
      {
        label: "Retention",
        description: "CRM, newsletters",
        width: 42,
      },
      {
        label: "Repeat Sales",
        description: "Fidélisation",
        width: 28,
      },
    ],
  },

  // ===== MEDIA SECTION =====
  media: {
    eyebrow: "04 — Médias · Stratego",
    title: "Visibilité Indoor & Outdoor",
    titleHighlight: "Indoor & Outdoor",
    description:
      "Sous la direction de Yann Tanguy, Stratego déploie votre visibilité média sur les zones stratégiques avec un ciblage précis et un ROI optimisé.",
    cards: [
      {
        pretitle: "Dispositif",
        title: "Indoor & Outdoor",
        body: "Déploiement de votre visibilité média sur les zones de chalandise stratégiques — centres commerciaux, pharmacies, gares, affichage urbain premium. Formats grand format et digital out-of-home.",
      },
      {
        pretitle: "Stratégie",
        title: "Ciblage Précis",
        body: "Stratégies médias adaptées aux budgets clients pour un impact visuel maximal et un ROI optimisé. Analyse de performance, heat mapping géographique et ajustement continu des dispositifs.",
      },
    ],
    imageCaption: "Campagnes LED grand format — façades prestige",
  },

  // ===== MARQUES/BRANDS SECTION =====
  marques: {
    eyebrow: "Portefeuille",
    title: "Marques d'exception",
    titleHighlight: "d'exception",
    description:
      "Une maîtrise des marques issues de cultures et d'approches variées — du dermo-cosmétique au clean beauty, de la pharmacie au luxe industriel.",
    caption:
      "Une maîtrise des marques issues de cultures et d'approches variées.",
    table: [
      {
        category: "Maquillage / Soin",
        badge: "Maquillage / Soin",
        brands: "T. LeClerc, Mimosa (Mast Industria Italiana)",
        expertise: "Dermo & Luxe Industriel",
      },
      {
        category: "Capillaire / Solaire",
        badge: "Capillaire / Solaire",
        brands: "Rosebaie, Soleil Noir",
        expertise: "Performance & Protection",
      },
      {
        category: "Soin / Wellness",
        badge: "Soin / Wellness",
        brands: "ADDAX, Archie, YV Cosmétiques, The Qoor",
        expertise: "Pharmacie & Holistique",
      },
      {
        category: "Innovation",
        badge: "Innovation",
        brands: "Pure Beauty, Options Beauty, Beauty Colossal",
        expertise: "Clean & New-Gen Beauty",
      },
    ],
  },

  // ===== CONTACT SECTION =====
  contact: {
    eyebrow: "Contact",
    title: "Bâtissons votre futur",
    titleHighlight: "votre futur",
    description:
      "Parlez-nous de votre marque et de vos ambitions. Notre équipe vous répondra dans les 48 heures pour convenir d'un premier échange.",
    contactInfo: {
      title: "Coordonnées",
      email: "contact@jphp-consulting.fr",
      emailNote: "Réponse sous 48h ouvrées",
      linkedin: "Jean Paul Pinto",
      linkedinNote: "LinkedIn — JP & HP Consulting",
      location: "Paris, France",
      locationNote: "Interventions sur tout le territoire national",
    },
    form: {
      fields: [
        {
          label: "Prénom",
          type: "text",
          placeholder: "Jean",
          name: "firstName",
        },
        {
          label: "Nom",
          type: "text",
          placeholder: "Dupont",
          name: "lastName",
        },
        {
          label: "Email professionnel",
          type: "email",
          placeholder: "jean.dupont@marque.com",
          name: "email",
        },
        {
          label: "Marque / Société",
          type: "text",
          placeholder: "Nom de votre marque",
          name: "company",
        },
      ],
      selectOptions: [
        "Sélectionner...",
        "Sell-In — Réseau commercial",
        "Sell-Out — Formation & activation",
        "Digital — LSR Agence",
        "Médias — Stratego",
        "Approche globale 360°",
      ],
      textareaPlaceholder: "Décrivez votre projet et vos objectifs...",
      submitLabel: "Envoyer le message",
      successMessage: "Message envoyé — nous vous contacterons sous 48h.",
    },
  },

  // ===== FOOTER =====
  footer: {
    brand: "JP & HP Consulting",
    description:
      "Direction Commerciale & Excellence Opérationnelle. L'écosystème commercial 360° : Sell-In, Sell-Out & Digital.",
    copyright: "© 2025 JP & HP Consulting — Tous droits réservés",
    sections: {
      services: [
        { label: "Sell-In", href: "#sellin" },
        { label: "Sell-Out", href: "#sellout" },
        { label: "Digital — LSR", href: "#digital" },
        { label: "Médias — Stratego", href: "#media" },
      ],
      about: [
        { label: "Notre approche", href: "#approche" },
        { label: "L'équipe", href: "#experts" },
        { label: "Marques", href: "#marques" },
        { label: "Contact", href: "#contact" },
      ],
      expertise: [
        { label: "Retail & Pharma", href: "#" },
        { label: "Beauté & Wellness", href: "#" },
        { label: "Digital & Social", href: "#" },
        { label: "Médias & OOH", href: "#" },
      ],
    },
    legal: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "RGPD", href: "#" },
    ],
  },
};

export default jphpContent;
