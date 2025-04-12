import { Campaign } from "../types/Campaign";

interface Props {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: Props) => {
  const ctr = (campaign.clicks / campaign.impressions) * 100;
  const costPerConversion = campaign.budget_spent / campaign.conversions;

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{campaign.name}</h2>
      <p className="text-sm text-gray-500">{campaign.platform}</p>
      <div className="mt-2 space-y-1 text-sm">
        <p>📊 CTR: {ctr.toFixed(2)}%</p>
        <p>🔁 Conversões: {campaign.conversions}</p>
        <p>💰 Custo por conversão: R$ {costPerConversion.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CampaignCard;
