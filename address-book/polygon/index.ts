import beefyfinance from "./platforms/beefyfinance";
import quickswap from "./platforms/quickswap";
import sushi from "./platforms/sushi";
import cometh from "./platforms/cometh";
import polyzap from "./platforms/polyzap";
import tokens from "./tokens/tokens";

const polygon = {
  platforms: {
    beefyfinance,
    quickswap,
    sushi,
    cometh,
    polyzap,
  },
  tokens,
};

export default polygon;
