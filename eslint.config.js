import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import"; // 1. Importar o plugin

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "import": importPlugin, // 2. Adicionar o plugin aqui
    },
    settings: {
      "import/resolver": {
        typescript: true, // Isso faz o ESLint entender seus aliases do tsconfig
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
      
      // 3. Adicionar as regras de ouro para imports:
      "import/no-unresolved": "error",   // Erro se o arquivo não existir
      "import/named": "error",         // Erro se o export nomeado não existir
      "import/no-self-import": "error", // Evita que um arquivo importe a si mesmo
    },
  },
);
