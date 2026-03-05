export interface InfluencerConfig {
  slug: string;
  displayName: string;
}

export const influencers: Record<string, InfluencerConfig> = {
  riya: { slug: "riya", displayName: "Riya" },
  shubham: { slug: "shubham", displayName: "Shubham" },
  ankit: { slug: "ankit", displayName: "Ankit" },
};

export function isValidInfluencer(slug: string): boolean {
  return slug.toLowerCase() in influencers;
}

export function getInfluencer(slug: string): InfluencerConfig | null {
  return influencers[slug.toLowerCase()] || null;
}
