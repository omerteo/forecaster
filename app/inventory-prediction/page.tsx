"use client";

import { useState } from "react";

type PredictionResult = {
  aiPrediction: string;
  summary: string;
  sampleInventory: any[];
  sampleOrders: any[];
};

export default function InventoryPredictionPage() {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  async function handlePredict(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/inventory-prediction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to get prediction");
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError("Request failed: " + (err?.message || err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <form onSubmit={handlePredict} className="w-full max-w-xl flex flex-col gap-4 bg-white/80 dark:bg-black/30 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
        <label htmlFor="prompt" className="font-semibold text-lg text-gray-800 dark:text-gray-100">Optional prompt for Gemini AI</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Type a custom prompt or leave blank for default analysis..."
          className="p-2 rounded border border-gray-300 dark:border-gray-700 min-h-[60px]"
        />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
          {loading ? "Predicting..." : "Predict Inventory Health"}
        </button>
      </form>
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {result && (
        <div className="w-full max-w-2xl mt-8 p-6 rounded-xl bg-white/90 dark:bg-black/40 border border-gray-200 dark:border-gray-800 shadow">
          <h2 className="font-bold text-lg mb-2">AI Inventory Prediction</h2>
          <pre className="whitespace-pre-wrap text-gray-900 dark:text-gray-100 mb-4">{result.aiPrediction}</pre>
          <details>
            <summary className="cursor-pointer font-semibold">Show Data Sent to Gemini</summary>
            <div className="mt-2">
              <strong>Inventory Sample:</strong>
              <pre className="whitespace-pre-wrap text-xs">{JSON.stringify(result.sampleInventory, null, 2)}</pre>
              <strong>Orders Sample:</strong>
              <pre className="whitespace-pre-wrap text-xs">{JSON.stringify(result.sampleOrders, null, 2)}</pre>
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
