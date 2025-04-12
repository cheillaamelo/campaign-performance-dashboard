import { Campaign } from "../types/Campaign";

export const fetchCampaigns = (): Promise<Campaign[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          platform: "Google Ads",
          name: "Campanha Dia das Mães",
          clicks: 1500,
          impressions: 30000,
          conversions: 120,
          budget_spent: 500.0,
        },
        {
          id: "2",
          platform: "Meta Ads",
          name: "Promoção Inverno",
          clicks: 800,
          impressions: 15000,
          conversions: 60,
          budget_spent: 350.0,
        },
      ]);
    }, 1000);
  });
};
