import path from "path";
import fs from "fs";
import YAML from "yamljs";

function resolveSwaggerPath(): string {
  const candidates = [
    path.join(process.cwd(), "dist", "docs", "openapi.yaml"), // prod build
    path.join(process.cwd(), "src", "docs", "openapi.yaml"),  // dev/tsx
    path.join(process.cwd(), "docs", "openapi.yaml"),         // optional root/docs
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  // Fall back to first candidate (helps error messages be consistent)
  return candidates[0];
}

const swaggerPath = resolveSwaggerPath();
const swaggerDocument = YAML.load(swaggerPath);

export default swaggerDocument;
