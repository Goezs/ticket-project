import { pipeline, TextStreamer } from '@huggingface/transformers';

let generator: any = null;

// Initialize the pipeline once

self.addEventListener('message', async (event: MessageEvent) => {
    const { text, modelName } = event.data;

    try {
        if (!generator) {
            self.postMessage({status: 'loading', message: "Downloading model layers..."});
            generator = await pipeline('text-generation', modelName, {
                device: 'webgpu', // Fallback to 'wasm happens automatically if WebGPU is absent'
            })
            self.postMessage({ status: 'ready', message: 'Model fully compiled!'});

        }
        // Stream tokens sequentially back to the React UI conponent
        const streamer = new TextStreamer(generator.tokenizer, {
            skip_prompt: true,
        });

        self.postMessage({ status: 'start' });

        // Execute text generation
        await generator(text, {
            max_new_tokens: 128,
            streamer: streamer,
            // Temperature: 0.7, // Adjust creativity balance
        });

        self.postMessage({ status: 'done' });

    } catch (error: any) {
        self.postMessage({ type: 'error', error: error.message });        
    }
});