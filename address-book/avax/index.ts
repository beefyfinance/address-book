import { beefyfinance } from "./platforms/beefyfinance";
import { lydia } from "./platforms/lydia";
import { tokens } from "./tokens/tokens";

export const avax = {
  platforms: {
    beefyfinance,
    lydia,
  },
  tokens,
};
