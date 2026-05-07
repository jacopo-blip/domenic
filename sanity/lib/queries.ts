import { sanityFetch } from "./live";

// ─── Types ───────────────────────────────────────────────────────────────────

export type SanityService = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription: string;
  price: string;
  image?: { asset: { _ref: string } };
  sortOrder: number;
};

export type SanityPricingItem = {
  _id: string;
  serviceName: string;
  price30: number;
  price45: number;
  price60: number;
  popular: boolean;
  sortOrder: number;
};

export type SanityFaqItem = {
  _id: string;
  question: string;
  answer: string;
  sortOrder: number;
};

export type SanityTestimonial = {
  _id: string;
  quote: string;
  authorName: string;
  authorDetail?: string;
  rating: number;
  sortOrder: number;
};

export type SanityAbout = {
  title: string;
  bio: string[];
  image?: { asset: { _ref: string } };
  yearsExperience: string;
  qualificationsCount: string;
  location: string;
  credentials: string[];
  heroImage?: { asset: { _ref: string } };
  heroSubtitle: string;
  breakdanceImage?: { asset: { _ref: string } };
  meinWegHighlights: { title: string; subtitle: string }[];
  philosophieTexte: string[];
  quote: string;
  quoteAuthorTitle: string;
  ctaHeading: string;
  ctaText: string;
};

export type SanitySettings = {
  siteTitle: string;
  siteDescription: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubheading: string;
  address: string;
  phone: string;
  email: string;
  calendlyUrl: string;
  insuranceText: string;
  instagramUrl: string;
  googleMapsUrl: string;
  logo?: { asset: { _ref: string } };
};

export type SanityHomePage = {
  heroBackgroundImage?: { asset: { _ref: string } };
  heroPortraitImage?: { asset: { _ref: string } };
  servicesBadge?: string;
  servicesHeading?: string;
  servicesHeadingAccent?: string;
  servicesText?: string;
  portraitImage?: { asset: { _ref: string } };
  portraitName?: string;
  portraitTitle?: string;
  reviewsBadge?: string;
  reviewsHeading?: string;
  reviewsHeadingAccent?: string;
  reviewsText?: string;
  pricingBadge?: string;
  pricingHeading?: string;
  pricingHeadingAccent?: string;
  pricingText?: string;
  pricingWkoUrl?: string;
  aboutTeaserBadge: string;
  aboutTeaserHeading: string;
  aboutTeaserHeadingAccent: string;
  aboutTeaserImage?: { asset: { _ref: string } };
  praxisBadge: string;
  praxisHeading: string;
  praxisHeadingAccent: string;
  praxisDescription: string;
  praxisImage?: { asset: { _ref: string } };
};

export type SanityHeilmassagePage = {
  heroBadge: string;
  heroHeading: string;
  heroSubtitle: string;
  heroImage?: { asset: { _ref: string } };
  forWhomHeading: string;
  forWhomDescription: string;
  conditions: string[];
  approachHeading: string;
  approachDescription: string;
  approachPoints: string[];
  approachBottomText: string;
  approachImage?: { asset: { _ref: string } };
  whatIsHeading: string;
  whatIsParagraphs: string[];
  effectsHeading: string;
  effectsDescription: string;
  effects: { title: string; description: string }[];
  locationHeading: string;
  locationDescription: string;
  transportInfo: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaText: string;
};

export type SanityKrankenkasse = {
  name: string;
  fullName: string;
  reimbursement: string;
  condition: string;
};

export type SanityPricingPage = {
  seoTitle: string;
  seoDescription: string;
  heroBadge: string;
  heroHeading: string;
  heroHeadingAccent: string;
  heroText: string;
  tableIntro: string;
  blockCardsHeading: string;
  blockCardsText: string;
  krankenkassenHeading: string;
  krankenkassenIntro: string;
  krankenkassen: SanityKrankenkasse[];
  krankenkassenDisclaimer: string;
  voucherCtaHeading: string;
  voucherCtaText: string;
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaText: string;
};

export type SanityBuchenPage = {
  heading: string;
  headingAccent: string;
  subtitle: string;
  steps: { number: string; text: string }[];
  medicalNote: string;
  successHeading: string;
  successText: string;
  infoHeading: string;
  infoHeadingAccent: string;
  infoDescription: string;
  accessibilityFeatures: string[];
  googleMapsEmbedUrl: string;
};

export type SanityImpressumPage = {
  sections: { heading: string; content: string }[];
};

export type SanityDatenschutzPage = {
  lastUpdated: string;
  sections: { heading: string; content: string; subsections?: { heading: string; content: string }[] }[];
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function safeFetch<T>(query: string): Promise<T | null> {
  try {
    const { data } = await sanityFetch({ query });
    return data as T;
  } catch {
    return null;
  }
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export async function getServices(): Promise<SanityService[] | null> {
  return safeFetch<SanityService[]>(
    `*[_type == "service"] | order(sortOrder asc) {
      _id, title, slug, shortDescription, price, image, sortOrder
    }`
  );
}

export async function getPricingItems(): Promise<SanityPricingItem[] | null> {
  return safeFetch<SanityPricingItem[]>(
    `*[_type == "pricingItem"] | order(sortOrder asc) {
      _id, serviceName, price30, price45, price60, popular, sortOrder
    }`
  );
}

export async function getFaqItems(): Promise<SanityFaqItem[] | null> {
  return safeFetch<SanityFaqItem[]>(
    `*[_type == "faqItem"] | order(sortOrder asc) {
      _id, question, answer, sortOrder
    }`
  );
}

export async function getTestimonials(): Promise<SanityTestimonial[] | null> {
  return safeFetch<SanityTestimonial[]>(
    `*[_type == "testimonial"] | order(sortOrder asc) {
      _id, quote, authorName, authorDetail, rating, sortOrder
    }`
  );
}

export async function getAbout(): Promise<SanityAbout | null> {
  return safeFetch<SanityAbout>(
    `*[_type == "about"][0] {
      title, bio, image, yearsExperience, qualificationsCount, location, credentials,
      heroImage, heroSubtitle, breakdanceImage,
      meinWegHighlights[] { title, subtitle },
      philosophieTexte, quote, quoteAuthorTitle, ctaHeading, ctaText
    }`
  );
}

export async function getSettings(): Promise<SanitySettings | null> {
  return safeFetch<SanitySettings>(
    `*[_type == "settings"][0] {
      siteTitle, siteDescription, heroHeadline, heroHeadlineAccent,
      heroSubheading, address, phone, email, calendlyUrl, insuranceText,
      instagramUrl, googleMapsUrl, logo
    }`
  );
}

export async function getHomePage(): Promise<SanityHomePage | null> {
  return safeFetch<SanityHomePage>(
    `*[_type == "homePage"][0] {
      heroBackgroundImage, heroPortraitImage,
      servicesBadge, servicesHeading, servicesHeadingAccent, servicesText,
      portraitImage, portraitName, portraitTitle,
      reviewsBadge, reviewsHeading, reviewsHeadingAccent, reviewsText,
      pricingBadge, pricingHeading, pricingHeadingAccent, pricingText, pricingWkoUrl,
      aboutTeaserBadge, aboutTeaserHeading, aboutTeaserHeadingAccent, aboutTeaserImage,
      praxisBadge, praxisHeading, praxisHeadingAccent, praxisDescription, praxisImage
    }`
  );
}

export async function getHeilmassagePage(): Promise<SanityHeilmassagePage | null> {
  return safeFetch<SanityHeilmassagePage>(
    `*[_type == "heilmassagePage"][0] {
      heroBadge, heroHeading, heroSubtitle, heroImage,
      forWhomHeading, forWhomDescription, conditions,
      approachHeading, approachDescription, approachPoints, approachBottomText, approachImage,
      whatIsHeading, whatIsParagraphs,
      effectsHeading, effectsDescription, effects[] { title, description },
      locationHeading, locationDescription, transportInfo[] { label, value },
      faqs[] { question, answer },
      ctaHeading, ctaText
    }`
  );
}

export async function getBuchenPage(): Promise<SanityBuchenPage | null> {
  return safeFetch<SanityBuchenPage>(
    `*[_type == "buchenPage"][0] {
      heading, headingAccent, subtitle,
      steps[] { number, text },
      medicalNote, successHeading, successText,
      infoHeading, infoHeadingAccent, infoDescription,
      accessibilityFeatures, googleMapsEmbedUrl
    }`
  );
}

export async function getImpressumPage(): Promise<SanityImpressumPage | null> {
  return safeFetch<SanityImpressumPage>(
    `*[_type == "impressumPage"][0] {
      sections[] { heading, content }
    }`
  );
}

export async function getDatenschutzPage(): Promise<SanityDatenschutzPage | null> {
  return safeFetch<SanityDatenschutzPage>(
    `*[_type == "datenschutzPage"][0] {
      lastUpdated,
      sections[] { heading, content, subsections[] { heading, content } }
    }`
  );
}

export async function getPricingPage(): Promise<SanityPricingPage | null> {
  return safeFetch<SanityPricingPage>(
    `*[_type == "pricingPage"][0] {
      seoTitle, seoDescription,
      heroBadge, heroHeading, heroHeadingAccent, heroText,
      tableIntro,
      blockCardsHeading, blockCardsText,
      krankenkassenHeading, krankenkassenIntro,
      krankenkassen[] { name, fullName, reimbursement, condition },
      krankenkassenDisclaimer,
      voucherCtaHeading, voucherCtaText,
      faqs[] { question, answer },
      ctaHeading, ctaText
    }`
  );
}
