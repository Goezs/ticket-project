import { useState, useRef, useEffect } from 'react';
import { pipeline, env } from '@huggingface/transformers';

// Skip local check warnings if running completely via CDN/remote fetch
env.allowLocalModels = false;

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  // Use a ref to hold the pipeline instance across re-renders
  const classifier = useRef<any>(null);

  useEffect(() => {
    async function loadModel() {
      // Loading a lightweight sentiment analysis model
      classifier.current = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
      setReady(true);
    }
    loadModel();
  }, []);

  const handleRun = async () => {
    if (!classifier.current || !input.trim()) return;
    setLoading(true);
    const output = await classifier.current(input);
    setResult(output);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
        <h1 className="text-2xl font-bold mb-2 text-indigo-400">Local AI with Transformers.js</h1>
        <p className="text-sm text-slate-400 mb-6">
          {ready ? 'Model loaded and running locally in your browser!' : 'Loading model weights... Please wait.'}
        </p>

        <textarea
          className="w-full h-32 p-4 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-indigo-500 mb-4 resize-none"
          placeholder="Type something to analyze..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          disabled={!ready || loading}
          onClick={handleRun}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 font-semibold rounded-lg transition-colors cursor-pointer"
        >
          {loading ? 'Processing...' : 'Run Analysis'}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700">
            <h2 className="text-sm font-semibold text-slate-400 mb-1">Result:</h2>
            <pre className="text-indigo-300 font-mono text-sm">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
