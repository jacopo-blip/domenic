import { customAlphabet } from "nanoid";
import { client as sanityClient } from "@/sanity/lib/client";

// Alphabet without 0/O/1/I/L for readability
const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
const segment = customAlphabet(ALPHABET, 4);

export async function generateUniqueVoucherCode(): Promise<string> {
  if (!sanityClient) {
    throw new Error("Sanity client is not configured");
  }
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = `GS-${segment()}-${segment()}`;
    const existing = await sanityClient.fetch<string | null>(
      `*[_type == "voucher" && code == $code][0]._id`,
      { code }
    );
    if (!existing) return code;
  }
  throw new Error("Could not generate unique voucher code after 5 attempts");
}
