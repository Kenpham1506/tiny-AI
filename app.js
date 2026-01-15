import * as webllm from "https://esm.run/@mlc-ai/web-llm";

const output = document.getElementById("output");
const promptBox = document.getElementById("prompt");
const sendBtn = document.getElementById("send");

const engine = new webllm.MLCEngine();

output.textContent = "Downloading model (first time only)...";

// ✅ EXACT model ID from your list
await engine.reload("Llama-3.2-3B-Instruct-q4f16_1-MLC");

output.textContent = "Ready.";

sendBtn.onclick = async () => {
  const prompt = promptBox.value.trim();
  if (!prompt) return;

  output.textContent = "Thinking…";

  const res = await engine.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    max_tokens: 12048,
    temperature: 0.7,
  });

  output.textContent = res.choices[0].message.content;
};
