import * as webllm from "https://esm.run/@mlc-ai/web-llm";

const output = document.getElementById("output");
const promptBox = document.getElementById("prompt");
const sendBtn = document.getElementById("send");

const engine = new webllm.MLCEngine();

output.textContent = "Downloading model (first time only)...";

// ✅ WORKS in current web-llm CDN
await engine.reload("phi-2-q4f16_1");

output.textContent = "Ready.";

sendBtn.onclick = async () => {
  const prompt = promptBox.value.trim();
  if (!prompt) return;

  output.textContent = "Thinking…";

  const res = await engine.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    max_tokens: 120,
    temperature: 0.7,
  });

  output.textContent = res.choices[0].message.content;
};
