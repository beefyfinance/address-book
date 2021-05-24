import { beefyfinance } from "./platforms/beefyfinance";
import { pancake } from "./platforms/pancake";
import { tokens } from "./tokens/tokens";

const bsc = {
  platforms: {
    beefyfinance,
    pancake,
  },
  tokens: tokens,
};

export { bsc };
