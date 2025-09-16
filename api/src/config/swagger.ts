import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yamljs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const swaggerDocument = YAML.load(
  path.join(__dirname, '..', 'docs', 'openapi.yaml')
);
