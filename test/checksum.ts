import addressbook from "../address-book";
import { isValidChecksumAddress, toChecksumAddress } from "ethereumjs-util";
import { exit } from "process";

const chainIdMap: { [chain: string]: number } = {
  bsc: 56,
  heco: 128,
  avax: 43114,
  fantom: 250,
  polygon: 137,
};

interface InvalidAddressInfo {
  chainName: string;
  platformName: string;
  address: string;
  addressName: string;
  correctAddress: string;
}

export const validateAllAddressesChecksum = (): InvalidAddressInfo[] => {
  const invalidAddressList: InvalidAddressInfo[] = [];

  const chains = Object.entries(addressbook);
  for (const chain of chains) {
    const chainName = chain[0];
    const chainId = chainIdMap[chainName];
    const platforms = Object.entries(chain[1]);

    for (const platform of platforms) {
      const platformName = platform[0];
      const addresses = platform[1];

      for (const addressEntry of Object.entries(addresses)) {
        const addressName = addressEntry[0];
        const address = addressEntry[1];

        const isValid = isValidChecksumAddress(address, chainId);
        const correctAddress = address
          ? toChecksumAddress(address, chainId)
          : "";
        if (!isValid) {
          invalidAddressList.push({
            chainName,
            platformName,
            address,
            addressName,
            correctAddress,
          });
        }
      }
    }
  }

  return invalidAddressList;
};

const invalidAddressList = validateAllAddressesChecksum();
if (invalidAddressList.length > 0) {
  for (const invalid of invalidAddressList) {
    const { chainName, platformName, address, addressName, correctAddress } =
      invalid;
    if (!invalid.address) {
      // (it's a placeholder)
      console.log(
        `Address '${addressName}' on platform '${platformName}' on chain '${chainName}' is missing`
      );
    } else {
      console.log(
        `Address '${addressName}' on platform '${platformName}' on chain '${chainName}' does not pass checksum. Incorrect Address: '${address}'`
      );
      console.log(`The correct address should be '${correctAddress}'`);
    }
  }
  exit(1);
} else {
  console.log("All addresses pass checksum test");
}
