import { toChecksumAddress } from "ethereumjs-util";
import { TokenList } from "../util/tokenList";
import fetch from "node-fetch";

import transformTokenListToObject from "../util/transfomTokenListToObject";
import chainIdMap from "../util/chainIdMap";

const tokenLists = {
  pancake:
    "https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS",
  quickswap:
    "https://unpkg.com/quickswap-default-token-list@1.0.59/build/quickswap-default.tokenlist.json",
};

const toChecksumTokenList = (tokenList: TokenList, chainId?: number): void => {
  const tokens = tokenList.tokens;
  for (const token of tokens) {
    token.address = toChecksumAddress(token.address);
  }
};

(async () => {
  const chainId = chainIdMap.polygon;
  const response = await fetch(tokenLists.quickswap);
  const tokenList = (await response.json()) as unknown as TokenList;
  toChecksumTokenList(tokenList);
  const toMap = transformTokenListToObject(tokenList, chainId);
  console.log(JSON.stringify(toMap));
})();
