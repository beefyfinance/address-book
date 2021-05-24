import { toChecksumAddress } from "ethereumjs-util";
import { TokenList } from "../util/tokenList";
import fetch from "node-fetch";

import transformTokenListToObject from "../util/transfomTokenListToObject";
import chainIdMap from "../util/chainIdMap";

const toChecksumTokenList = (tokenList: TokenList, chainId: number): void => {
  const tokens = tokenList.tokens;
  for (const token of tokens) {
    token.address = toChecksumAddress(token.address, chainId);
  }
};

(async () => {
  const chainId = chainIdMap.avax;
  const response = await fetch(
    "https://unpkg.com/quickswap-default-token-list@1.0.59/build/quickswap-default.tokenlist.json"
  );
  const tokenList = (await response.json()) as unknown as TokenList;
  toChecksumTokenList(tokenList, chainId);
  const toMap = transformTokenListToObject(tokenList, chainId);
  console.log(JSON.stringify(toMap));
})();
