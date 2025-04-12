export interface Campaign {
  id: string;
  platform: "Google Ads" | "Meta Ads";
  name: string;
  clicks: number;
  impressions: number;
  conversions: number;
  budget_spent: number;
}
