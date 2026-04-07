import { client } from "./client";

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
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function safeFetch<T>(query: string): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query);
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
      title, bio, image, yearsExperience, qualificationsCount, location, credentials
    }`
  );
}

export async function getSettings(): Promise<SanitySettings | null> {
  return safeFetch<SanitySettings>(
    `*[_type == "settings"][0] {
      siteTitle, siteDescription, heroHeadline, heroHeadlineAccent,
      heroSubheading, address, phone, email, calendlyUrl, insuranceText
    }`
  );
}
