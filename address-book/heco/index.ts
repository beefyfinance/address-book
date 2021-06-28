import { beefyfinance } from "./platforms/beefyfinance";
import { mdex } from "./platforms/mdex";
import { tokens } from "./tokens/tokens";

import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";

export const heco = {
  platforms: {
    beefyfinance,
    mdex,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
