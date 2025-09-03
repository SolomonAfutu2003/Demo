import React, { useState } from "react";

const languages = [
  { code: "auto", name: "Auto Detect" },
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "es", name: "Spanish" },
  { code: "de", name: "German" },
  { code: "sw", name: "Swahili" },
  { code: "zh", name: "Chinese" },
  { code: "ar", name: "Arabic" },
];

const TranslateLingva = () => {
  const [input, setInput] = useState("");
  const [sourceLang, setSourceLang] = useState("auto");
  const [targetLang, setTargetLang] = useState("fr");
  const [result, setResult] = useState("");

  const handleTranslate = async () => {
    try {
      const res = await fetch(
        `https://lingva.ml/api/v1/${sourceLang}/${targetLang}/${encodeURIComponent(input)}`
      );
      const data = await res.json();
      setResult(data.translation);
    } catch (err) {
      console.error("Translation error:", err);
      setResult("❌ Error translating");
    }
  };

  const handleSwitch = () => {
    // swap source <-> target (except if source is auto-detect)
    if (sourceLang !== "auto") {
      const temp = sourceLang;
      setSourceLang(targetLang);
      setTargetLang(temp);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-3">🌍 Translator (Lingva API)</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
        className="w-full border p-2 mb-3 rounded"
      />

      <div className="flex items-center gap-2 mb-3">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleSwitch}
          className="px-3 py-2 bg-gray-200 rounded"
        >
          🔄
        </button>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          {languages
            .filter((lang) => lang.code !== "auto")
            .map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
        </select>
      </div>

      <button
        onClick={handleTranslate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Translate
      </button>

      {result && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default TranslateLingva;
