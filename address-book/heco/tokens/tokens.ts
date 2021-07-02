import { ConstRecord } from "../../../types/const";
import Token from "../../../types/token";

const HT = {
  name: "Wrapped HT",
  symbol: "WHT",
  address: "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F",
  chainId: 128,
  decimals: 18,
  logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/8524.png",
} as const;

const _tokens = {
  WHT: HT,
  WNATIVE: HT,
  ETH: {
    name: "Etheruem",
    symbol: "ETH",
    address: "0x64FF637fB478863B7468bc97D30a5bF3A428a1fD",
    chainId: 128,
    decimals: 18,
    logoURI: "https://hecoinfo.com/token/images/HETH_32.png",
  },
  USDT: {
    name: "Heco USDT",
    symbol: "USDT",
    address: "0xa71EdC38d189767582C38A3145b5873052c3e47a",
    chainId: 128,
    decimals: 18,
    logoURI: "https://hecoinfo.com/token/images/USDTHECO_32.png",
  },
  LHB: {
    name: "Lendhub",
    symbol: "LHB",
    address: "0x8F67854497218043E1f72908FFE38D0Ed7F24721",
    chainId: 128,
    decimals: 18,
    logoURI: "https://hecoinfo.com/token/images/lendhub_32.png",
  },
  BIFI: {
    name: "Beefy.Finance",
    symbol: "BIFI",
    address: "0x765277EebeCA2e31912C9946eAe1021199B39C61",
    chainId: 128,
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/images/single-assets/BIFI.png",
  },
} as const;
export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;
