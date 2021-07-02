import { beefyfinance } from "./platforms/beefyfinance";
import { pancake } from "./platforms/pancake";
import { ironfinance } from "./platforms/ironfinance";
import { tokens } from "./tokens/tokens";
import { convertSymbolTokenMapToAddressTokenMap } from "../../util/convertSymbolTokenMapToAddressTokenMap";
import Chain from "../../types/chain";
import { ConstInterface } from "../../types/const";

const _bsc = {
  platforms: {
    beefyfinance,
    pancake,
    ironfinance,
  },
  tokens,
  tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens),
};

export const bsc: ConstInterface<typeof _bsc, Chain> = _bsc;
