"use client";
import { useEffect, useState } from "react";

export default function AiSummaryPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<string | null>(null);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  type SampleType = Record<string, unknown>;
  const [sample, setSample] = useState<SampleType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/ai-summarize")
      .then((res) => res.json())
      .then((data) => {
        setSummary(data.summary);
        setAiSummary(data.aiSummary);
        setSample(data.sample);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Database Summary</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {summary && (
        <code>
          <h2 className="text-lg font-semibold mt-4 mb-2">Raw Summary</h2>
          <pre className="bg-gray-100 font-black p-2 rounded text-sm whitespace-pre-wrap">{summary}</pre>
        </code>
      )}
      {aiSummary && (
        <pre>
          <h2 className="text-lg font-semibold mt-4 mb-2">AI Insights</h2>
          <div className="bg-blue-50 p-3 rounded text-base whitespace-pre-wrap">{aiSummary}</div>
        </pre>
      )}
      {sample && (
        <pre>
          <h2 className="text-lg font-semibold mt-4 mb-2">Sample Row</h2>
          <pre className="bg-gray-50 p-2 rounded text-xs whitespace-pre-wrap">{JSON.stringify(sample, null, 2)}</pre>
        </pre>
      )}
    </div>
  );
}
