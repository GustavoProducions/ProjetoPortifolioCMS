import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Define '@' como 'src'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // Garante que .tsx seja resolvido automaticamente
  },
  server: {
    historyApiFallback: true,
    mimeTypes: {
      '.js': 'application/javascript',
      '.jsx': 'application/javascript'
    }
  }
});
