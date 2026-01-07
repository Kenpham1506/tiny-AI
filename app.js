import * as webllm from "https://esm.run/@mlc-ai/web-llm";

const output = document.getElementById("output");
const promptBox = document.getElementById("prompt");
const sendBtn = document.getElementById("send");

const engine = new webllm.MLCEngine();

// Load a fast, small model
output.textContent = "Downloading model (first time only)...";

await engine.reload("qwen2.5-0.5b-instruct");

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
