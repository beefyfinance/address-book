import { beefyfinance } from "./platforms/beefyfinance";
import { spookyswap } from "./platforms/spookyswap";
import { tokens } from "./tokens/tokens";

export const fantom = {
  platforms: {
    beefyfinance,
    spookyswap,
  },
  tokens,
};
