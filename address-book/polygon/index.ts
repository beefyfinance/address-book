import { beefyfinance } from "./platforms/beefyfinance";
import { cometh } from "./platforms/cometh";
import { dfyn } from "./platforms/dfyn";
import { polyzap } from "./platforms/polyzap";
import { quickswap } from "./platforms/quickswap";
import { sushi } from "./platforms/sushi";
import { goldenbull } from "./platforms/goldenbull";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";

export const polygon = {
  platforms: {
    beefyfinance,
    cometh,
    dfyn,
    polyzap,
    quickswap,
    sushi,
    goldenbull,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
