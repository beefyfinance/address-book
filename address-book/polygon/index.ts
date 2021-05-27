import { beefyfinance } from "./platforms/beefyfinance";
import { cometh } from "./platforms/cometh";
import { dyfn } from "./platforms/dyfn";
import { polyzap } from "./platforms/polyzap";
import { quickswap } from "./platforms/quickswap";
import { sushi } from "./platforms/sushi";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";

export const polygon = {
  platforms: {
    beefyfinance,
    cometh,
    dyfn,
    polyzap,
    quickswap,
    sushi,
  },
  tokens,
  addressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
