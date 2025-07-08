"use client";
import { useState } from "react";
import { PromptForm } from "./components/prompt-form";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-900 dark:to-gray-950 p-4">
      <PromptForm onResult={(res, err) => { setResult(res); setError(err); }} />
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {result && (
        <div className="w-full max-w-xl mt-8 p-6 rounded-xl bg-white/90 dark:bg-black/40 border border-gray-200 dark:border-gray-800 shadow">
          <h2 className="font-bold text-lg mb-2">AI Summary</h2>
          <pre className="whitespace-pre-wrap text-gray-900 dark:text-gray-100">{result}</pre>
        </div>
      )}
    </div>
  );
}
