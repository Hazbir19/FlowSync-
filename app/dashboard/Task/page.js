"use client";
import { useState } from "react";
import { api } from "@/app/api/aiAssistant/route";

export default function AIAssistantPage() {
  const [query, setQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const payload = {
    contents: [
      {
        parts: [
          {
            text: query,
          },
        ],
      },
    ],
  };
  const askAI = async () => {
    setLoading(true);
    try {
      let response = await fetch(api, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      response = await response.json();
      response = response.candidates[0].content.parts[0].text;
      console.log(response);
      setAiResponse(response);
    } catch (err) {
      setAiResponse("Something went wrong: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 FlowSync AI Assistant</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about task status, bottlenecks, suggestions..."
        className="w-full p-2 border rounded mb-2"
      />

      <button
        onClick={askAI}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {aiResponse && (
        <div className="mt-4 p-3 bg-white border rounded text-gray-800 whitespace-pre-line">
          {aiResponse}
        </div>
      )}
    </div>
  );
}
