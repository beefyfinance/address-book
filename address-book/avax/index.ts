import tokens from "./tokens/tokens.json";
import beefyfinance from "./platforms/beefyfinance";
import lydia from "./platforms/lydia";

const avax = {
  platforms: {
    beefyfinance,
    lydia,
  },
  tokens,
};

export default avax;
