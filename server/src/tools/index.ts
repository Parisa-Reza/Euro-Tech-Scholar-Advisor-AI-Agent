import { Type } from "@google/genai";
import { searchRequirements} from "../services/index.js";

const searchRequirementsDefinition = {
  name: "search_requirements",
  description: "Search for requirements by country name, university name, or program name",
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: { type: Type.STRING, description: "The query to search for" },
    },
    required: ["query"],
  },
};

export const searchRequirementsTool = {
  definition: searchRequirementsDefinition,
  execute: async ({ query }: { query: string }) => {
    return searchRequirements({ query });
  },
}