import { useEffect, useState } from "react";
import { Campaign } from "./types/Campaign";
import { fetchCampaigns } from "./api/mock";
import CampaignCard from "./components/CampaignCard";

function App() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState<"All" | "Google Ads" | "Meta Ads">(
    "All"
  );

  useEffect(() => {
    fetchCampaigns()
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filtered = campaigns.filter((c) =>
    filter === "All" ? true : c.platform === filter
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📈 Dashboard de Campanhas</h1>

      <div className="mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded ${
            filter === "All" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          Todas
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "Google Ads" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Google Ads")}
        >
          Google Ads
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "Meta Ads" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Meta Ads")}
        >
          Meta Ads
        </button>
      </div>

      {loading && <p>Carregando campanhas...</p>}
      {error && <p className="text-red-500">Erro ao carregar campanhas.</p>}
      {!loading && !error && (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
