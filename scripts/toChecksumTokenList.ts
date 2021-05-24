import { toChecksumAddress } from "ethereumjs-util";
import { TokenList } from "../util/tokenList";

import tokenList from "../address-book/bsc/tokens/tokens.json";

const transformTokenListToObject = (
  tokenList: TokenList,
  chainId: number
): void => {
  const tokens = tokenList.tokens;
  for (const token of tokens) {
    token.address = toChecksumAddress(token.address, chainId);
  }
  console.log(JSON.stringify(tokens));
};

transformTokenListToObject(tokenList, 56);
