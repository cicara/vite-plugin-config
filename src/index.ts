import yaml from 'yaml';
import { readFile } from 'fs/promises';

import type { Plugin } from 'vite';

export type PluginOptions = {
  name: string;
  file: string;
  validate?: (value: unknown) => void | Promise<void>,
};

export default function(pluginOptions: PluginOptions): Plugin {
  return {
    name: 'vite:plugin-config',
    enforce: 'pre',
    async load(id) {
      if (id === pluginOptions.name) {
        const content = await readFile(pluginOptions.file, 'utf-8');
        const value = yaml.parse(content);

        await pluginOptions.validate?.(value)

        const json = JSON.stringify(value);
        return {
          map: '',
          code: `export default ${json};`,
        };
      }
      return null;
    },
    resolveId(source) {
      if (source === pluginOptions.name) {
        return source;
      }
      return null
    },
  };
}
