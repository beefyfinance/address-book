import { toChecksumAddress } from "ethereumjs-util";
import { Token, TokenList } from "../util/tokenList";
import fetch from "node-fetch";
import tokenList from "./sampleList.json";

import transformTokenListToObject from "../util/transfomTokenListToObject";
import chainIdMap from "../util/chainIdMap";

const tokenLists = {
  bsc: [
    "https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS",
    "https://yearn.science/static/tokenlist.json",
    "https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json",
    "tokenlist.aave.eth",
    "synths.snx.eth",
    "https://umaproject.org/uma.tokenlist.json",
    "https://nftx.ethereumdb.com/v1/tokenlist/",
    "wrapped.tokensoft.eth",
    "https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json",
    "https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json",
    "https://app.tryroll.com/tokens.json",
    "defi.cmc.eth",
    "stablecoin.cmc.eth",
    "t2crtokens.eth",
    "https://www.gemini.com/uniswap/manifest.json",
    "https://unpkg.com/quickswap-default-token-list@1.0.39/build/quickswap-default.tokenlist.json",
  ],
  quickswap: [
    "https://unpkg.com/quickswap-default-token-list@1.0.59/build/quickswap-default.tokenlist.json",
  ],
  avax: [
    "https://raw.githubusercontent.com/pangolindex/tokenlists/main/aeb.tokenlist.json",
    "https://raw.githubusercontent.com/pangolindex/tokenlists/main/defi.tokenlist.json",
    "https://raw.githubusercontent.com/pangolindex/tokenlists/main/stablecoin.tokenlist.json",
  ],
};

const toChecksumTokenList = (tokens: Token[], chainId?: number): void => {
  for (const token of tokens) {
    token.address = toChecksumAddress(token.address);
  }
};

(async () => {
  const chainId = chainIdMap.bsc;
  let tokens: any[] = [];
  let tokenListFinal: any;
  for (const tokenList of tokenLists.bsc) {
    const response = await fetch(tokenList);
    const tokenListTmp = (await response.json()) as unknown as TokenList;
    tokenListFinal = tokenListTmp;
    tokens = [...tokens, ...tokenListTmp.tokens];
  }
  toChecksumTokenList(tokens);
  tokenListFinal.tokens = tokens;
  const toMap = transformTokenListToObject(tokenListFinal, chainId);
  console.log(JSON.stringify(toMap));
})();
