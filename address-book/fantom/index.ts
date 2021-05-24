import beefyfinance from "./platforms/beefyfinance";
import tokens from "./tokens/tokens.json";
import spookyswap from "./platforms/spookyswap";

const fantom = {
  platforms: {
    beefyfinance,
    spookyswap,
  },
  tokens,
};

export default fantom;
