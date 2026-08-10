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
    <div style = {{ padding: '24px', fontFamily: 'sans-serif'}}>
      <h1>Client-Side LLM playground</h1>  
      <p>System Status: 
        <strong>{status}
        </strong>
      </p>

      <textarea
       rows= {4}
       style = {{ width: '100%', marginBottom: '12px', background: '#fff'}}
       value = {input}
       onChange= {(e) => setInput(e.target.value)}
       placeholder = "Type something to promt your local model..."
      />

      <button onClick={handleGenerate} 
        style= {{ padding: '8px 16px', cursor: 'pointer', background: '#fff' }}
      >
        Run Model
      </button>

      <div style={{ marginTop: '24px', background: '#f5f', padding: '16px', borderRadius: '4px' }}>
        <h3>Response:</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{ output || 'No generation yet.' }</p>
      </div>
    </div>
  )
}