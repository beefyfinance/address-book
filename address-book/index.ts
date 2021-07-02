import { polygon } from "./polygon";
import { bsc } from "./bsc";
import { avax } from "./avax";
import { fantom } from "./fantom";
import { heco } from "./heco";
import Chain from "../types/chain";
import { ChainId } from "../types/chainid";
import { ConstRecord } from "../types/const";

export * from "../types/chainid";

const _addressBook = {
  polygon,
  [ChainId.polygon]: polygon,
  bsc,
  [ChainId.bsc]: bsc,
  avax,
  [ChainId.avax]: avax,
  fantom,
  [ChainId.fantom]: fantom,
  heco,
  [ChainId.heco]: heco,
} as const;

export const addressBook: ConstRecord<typeof _addressBook, Chain> =
  _addressBook;
