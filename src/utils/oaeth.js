const {
  TradeTrustERC721Factory,
  TitleEscrowFactory,
  TitleEscrowCreatorFactory,
} = require("@govtechsg/token-registry");
const { Wallet, providers, getDefaultProvider } = require("ethers");

const issueToken = async (hashSignature, beneficiary, holder) => {
  try {
    /*this set of code will provide invalid response errorcode 403 export.XMLHttpRequest error,same code with ethersv5 produce processing response error "error": {
            "code": -32000,
            "message": "insufficient funds for gas * price + value"
        } */
    const provider = getDefaultProvider("ropsten");
    const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
    const gasPrice = await wallet.provider.getGasPrice();

    const factory = new TradeTrustERC721Factory(wallet);
    const tokenRegistry = await factory.deploy("MY_TOKEN_REGISTRY", "TKN", {
      gasPrice: gasPrice.mul(210000),
    });

    // return tokenRegistry;
    /*this set of code in ethersv4 will provide invalid address argument for _tokenRegistry which i just created using the oa cl{
    "reason": "invalid address",
    "code": "INVALID_ARGUMENT",
    "arg": "_tokenRegistry",
    "value": 1.3942574724382635e+48
    }
    , same code using ethersv5 will give the error invalid ENS name  {
    "reason": "invalid ENS name",
    "code": "INVALID_ARGUMENT",
    "argument": "name",
    "value": 1.3942574724382635e+48
} */
    const provider = getDefaultProvider("ropsten");
    const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

    const factory = new TitleEscrowFactory(wallet);
    const escrowInstance = await factory.deploy(
      0xF438AaD81b7B496C80B8d72cB6ad1953E7fB655b,
      0x53C68e3f768bf41429Ef726a144298AAB5523855,
      0x53C68e3f768bf41429Ef726a144298AAB5523855
    );
    return escrowInstance
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = issueToken;
