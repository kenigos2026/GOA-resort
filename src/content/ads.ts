export interface AdCampaign {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  startDate: string;
  endDate: string;
  active: boolean;
  placement: "nearby" | "experiences" | "homepage";
  sponsor: string;
}

// Phase 2: Ad management module
// This file serves as the data source for sponsored content
// The admin panel at /admin will manage these entries

export const adCampaigns: AdCampaign[] = [
  // Starter — empty, ready for stakeholder content
];

export const adSlots = [
  { id: "nearby-sidebar", name: "Nearby Places Sidebar", placement: "nearby" as const },
  { id: "experiences-bottom", name: "Experiences Bottom Banner", placement: "experiences" as const },
  { id: "homepage-strip", name: "Homepage Sponsored Strip", placement: "homepage" as const },
];
