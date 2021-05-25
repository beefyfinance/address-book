import { TokenList, Token } from "./tokenList";

const transformTokenListToObject = (
  tokenList: TokenList,
  chainIdFilter?: number
): Record<string, Token> => {
  const map: Record<string, Token> = {};
  tokenList.tokens.forEach((token) => {
    if ((chainIdFilter && token.chainId === chainIdFilter) || !chainIdFilter) {
      const tokenKey =
        token.symbol in map ? `${token.symbol}-${token.name}` : token.symbol;
      map[tokenKey] = token;
    }
  });
  return map;
};

export default transformTokenListToObject;
