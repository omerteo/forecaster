"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../components/ui/button";

const promptSchema = z.object({
  prompt: z.string().min(1, "Prompt is required")
});

export function PromptForm({ onResult }: { onResult: (result: string | null, error: string | null) => void }) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<{ prompt: string }>({
    resolver: zodResolver(promptSchema)
  });

  async function submitPrompt(formData: FormData) {
    const prompt = formData.get("prompt");
    if (!prompt || typeof prompt !== "string") {
      onResult(null, "Prompt is required");
      return;
    }
    const res = await fetch("/api/ai-summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    if (!res.ok) {
      console.error("Failed to get summary:", res.status, res.statusText);
      onResult(null, "Failed to get summary");
      return;
    }
    const data = await res.json();
    onResult(data.aiSummary || data.summary || "No summary returned.", null);
    reset();
  }

  const onSubmit = (data: { prompt: string }) => {
    onResult(null, null);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("prompt", data.prompt);
      await submitPrompt(formData);
    });
  };

  return (
    <form
      className="w-full max-w-xl flex flex-col gap-4 bg-white/80 dark:bg-black/30 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="prompt" className="font-semibold text-lg text-gray-800 dark:text-gray-100">
        Enter your prompt
      </label>
      <Textarea
        id="prompt"
        {...register("prompt")}
        placeholder="Type your prompt here..."
        className=""
        defaultValue={"Please provide a high-level analysis and any interesting insights."}
      />
      {errors.prompt && (
        <span className="text-red-600 text-sm">{errors.prompt.message}</span>
      )}
      <Button type="submit" disabled={isPending}>
        {isPending ? "Summarizing..." : "Submit"}
      </Button>
    </form>
  );
}
