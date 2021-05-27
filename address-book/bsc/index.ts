import { beefyfinance } from "./platforms/beefyfinance";
import { pancake } from "./platforms/pancake";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";

const bsc = {
  platforms: {
    beefyfinance,
    pancake,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export { bsc };
