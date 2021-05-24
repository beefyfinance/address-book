import { TokenList, Token } from "./tokenList";

const transformTokenListToObject = (
  tokenList: TokenList
): Record<string, Token> => {
  const map: Record<string, Token> = {};
  tokenList.tokens.forEach((token) => {
    map[token.symbol] = token;
  });
  return map;
};

export default transformTokenListToObject;
