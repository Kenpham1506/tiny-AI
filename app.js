import * as webllm from "https://esm.run/@mlc-ai/web-llm";

console.log("Available models:");
console.table(
  webllm.prebuiltAppConfig.model_list.map(m => ({
    id: m.model_id,
    vram: m.vram_required_MB
  }))
);

document.getElementById("output").textContent =
  "Open DevTools → Console to see available models.";
