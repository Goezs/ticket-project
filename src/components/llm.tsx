import { useEffect, useRef, useState } from 'react';

export default function llm() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState('Idle');
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Instantiate worker from worker module
    workerRef.current = new Worker(
      new URL('../llm.worker.ts', import.meta.url),
      { type: 'module'}
    );

    workerRef.current.onmessage = (event) => {
      const { status, output: token, message } = event.data;

      if (status === 'loading') setStatus(message);
      if (status === 'ready') setStatus('Model ready');
      if (status === 'start') setStatus('');
      if (status === 'chunk') setStatus('chunk');
      if (status === 'update') {
        // append new tokens to the existing output string
        setOutput((prev) => prev + token);

      }


      if (status === 'done') setStatus('Finished generating');
    };

    return () => workerRef.current?.terminate();

  }, []);

  const handleGenerate = () => {
    if (!input || !workerRef.current) return;
    setStatus('Processing...');
    workerRef.current.postMessage({
      text: input,
      modelName: 'onnx-community/SmolLM2-135M-ONNX', // Using 135M parameters layout
    });
  };

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6"
      >
      <h1>Client-Side LLM playground</h1>  
      <p>System Status: 
        <strong>{status}
        </strong>
      </p>

      <textarea
        rows= {4}
        className="absolute top-1/2 left-4 bg-pink"
        value = {input}
        onChange= {(e) => setInput(e.target.value)}
        placeholder = "Type something to promt your local model..."
      />

      <button onClick={handleGenerate} 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-blue/60 text-white p-2 rounded-full transition"
      >
        Run Model
      </button>

      <div 
        className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6"
        >
        <h3>Response:</h3>
        <p 
          className="text-white"
          >{ output || 'No generation yet.' }</p>
      </div>
    </div>
  )
}