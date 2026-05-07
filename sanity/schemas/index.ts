import { serviceSchema } from "./service";
import { pricingItemSchema } from "./pricingItem";
import { faqItemSchema } from "./faqItem";
import { testimonialSchema } from "./testimonial";
import { aboutSchema } from "./about";
import { settingsSchema } from "./settings";
import { homePageSchema } from "./homePage";
import { heilmassagePageSchema } from "./heilmassagePage";
import { buchenPageSchema } from "./buchenPage";
import { impressumPageSchema } from "./impressumPage";
import { datenschutzPageSchema } from "./datenschutzPage";
import { pricingPageSchema } from "./pricingPage";

export const schemaTypes = [
  settingsSchema,
  homePageSchema,
  heilmassagePageSchema,
  pricingPageSchema,
  buchenPageSchema,
  impressumPageSchema,
  datenschutzPageSchema,
  aboutSchema,
  serviceSchema,
  pricingItemSchema,
  faqItemSchema,
  testimonialSchema,
];
