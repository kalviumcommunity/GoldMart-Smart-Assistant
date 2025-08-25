// tokenizer.js
import { encoding_for_model } from "tiktoken";

/**
 * Counts tokens for a given text using a specific model.
 * @param {string} text - The text to tokenize
 * @param {string} model - Model name (default "gpt-3.5-turbo")
 * @returns {number} - Number of tokens
 */
export const countTokens = (text, model = "gpt-3.5-turbo") => {
  const enc = encoding_for_model(model);
  const tokens = enc.encode(text);
  return tokens.length;
};
