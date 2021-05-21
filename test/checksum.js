// make sure all addresses are checksummed

const fs = require("fs")
const { isValidChecksumAddress, toChecksumAddress } = require('ethereumjs-util');
const { exit } = require("process");

const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath, arrayOfFiles)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      const fileWithoutExt = file.split('.')[0]
      if (fileWithoutExt !== "index") {
        const requirePath = '.' + dirPath + "/" + fileWithoutExt
        arrayOfFiles.push(requirePath)
      }
    }
  })

  return arrayOfFiles
}

const getChainIdFromPath = (p) => {
  if (p.includes("heco")){
    return 128
  }
  else if (p.includes("avax")){
    return 43114
  }
  else if (p.includes("polygon")){
    return 137
  }
  else if (p.includes("fantom")){
    return 137
  }
  else /* if (p.includes("fantom")) */{
    return 56
  }
}

const filesArr = getAllFiles("./address-book")
const invalidAddressList = []
filesArr.forEach(file => {
  const mod = require(file)
  const chainId = getChainIdFromPath(file)
  const exp = mod[Object.keys(mod)]
  const addressNameList = Object.keys(exp);
  for (const addressName of addressNameList) {
      const address = exp[addressName]
      const isValid = isValidChecksumAddress(address, chainId)
      const correctAddress = toChecksumAddress(address, chainId)
      if (!isValid) {
        invalidAddressList.push({
          address,
          addressName,
          correctAddress
        })
      }
  }
})

if (invalidAddressList.length > 0) {
  for (const invalid of invalidAddressList){
    console.log(invalid.addressName + " does not pass checksum. Address: " + invalid.address + '\n')
    console.log("The correct address should be: " + invalid.correctAddress)
  }
  exit(1)
}
