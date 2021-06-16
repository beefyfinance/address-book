import { beefyfinance } from "./platforms/beefyfinance";
import { cometh } from "./platforms/cometh";
import { dfyn } from "./platforms/dfyn";
import { polyzap } from "./platforms/polyzap";
import { quickswap } from "./platforms/quickswap";
import { sushi } from "./platforms/sushi";
import { goldenbull } from "./platforms/goldenbull";
import { polycat } from "./platforms/polycat";
import { iron } from "./platforms/iron";
import { adamant } from "./platforms/adamant";
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
    polycat,
    iron,
    adamant,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
