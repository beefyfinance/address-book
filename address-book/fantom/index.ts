import { beefyfinance } from "./platforms/beefyfinance";
import { spookyswap } from "./platforms/spookyswap";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";

export const fantom = {
  platforms: {
    beefyfinance,
    spookyswap,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};
