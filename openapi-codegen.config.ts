import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  kasumiApi: {
    from: {
      relativePath: "./src/openApi/v1.json",
      source: "file",
    },
    outputDir: "./src/react/api-hooks",
    to: async (context) => {
      const filenamePrefix = "kasumiApi";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
