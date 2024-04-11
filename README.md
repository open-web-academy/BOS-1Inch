# BOS + 1Inch

This repository is an example of how to implement the 1Inch technology to swap tokens on the Arbitrum network.

<img src="https://drive.google.com/uc?id=1SAfDdNpwniZb0PDukpGsNFooZJytgh0-" width="50%">

## How to implement 1Inch technology in BOS?

To implement the 1Inch technology and swap tokens we must make some configurations in our BOS component.
The main methods are shown below:

The following is the definition of the network information along with each of its properties, as well as the addresses of the pools to be used for the exchange.

As we can see we have a constant called **dataChains** which has different properties, in this case we have the information of the Ethereum and Arbitrum network (this is the one we will be interacting with).

The most important properties to consider are the following:

  * **urlScan**: transaction explorer url.
  * **decimals**: number of decimal of the token.
  * **AGGREGATOR_CONTRACT_ADDRESS**: contract address to do swap.
  * **pools**: list of pools of tokens to do swap.

```jsx
const dataChains = {
  1: {
    urlScan: "https://etherscan.io",
    decimals: 18,
    gasPrice: 28297294608,
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    AGGREGATOR_CONTRACT_ADDRESS: "0x1111111254eeb25477b68fb85ed929f73a960582",
    icon: ethereumIcon,
  },
  42161: {
    urlScan: "https://arbiscan.io",
    decimals: 18,
    gasPrice: 218000000,
    token: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    AGGREGATOR_CONTRACT_ADDRESS: "0x1111111254eeb25477b68fb85ed929f73a960582",
    icon: arbitrumIcon,
    priceImpacts: {
      USDT: 1.5,
      USDC: 1.5,
      ARB: 1.5,
      WETH: 0.998,
    },
    pools: {
      // USDT //
      "USDT-USDC":
        "57896044618658097711785492505429974314625216912246731247414444614482019938038",
      "USDT-WETH":
        "57896044618658097711785492504846424736208298133608521064419565105435343258460",
      "USDT-ARB":
        "57896044618658097711785492505075175385210698316329882491027601267417925856186",

      // USDC //
      "USDC-USDT": "1086020387990224579426449227685652610525455118070",
      "USDC-WETH": "",
      "USDC-ARB":
        "57896044618658097711785492504900093571275932639932685109444255354911400435547",
      "USDC-DAI": "713445780961091568991368167773882027141321327875",

      // WETH //
      "WETH-USDT": "377285446259603589044019170807923446115487183260",
      "WETH-USDC": "1133728073681940367821131311293658769854953023696",
      "WETH-ARB": "1135899632063313397415331885587749149708863813994",
    },
  },
};
```

**Init Network**: The following lines of code will allow to create a new property in the state of the component called **blockchain** where you will have the information of the network with which we will be interacting, in this case **Arbitrum**.

```jsx
// Add property to the state to set the blockchain to use where we include its name and chainId.
State.init({
  blockchain: { name: "Arbitrum", chainId: 42161 },
});
```

**Get Network**: The following method will allow us to obtain the current network in which we are connected with Metamask and in case we are not in the correct network (**Arbitrum**) the method to change the network will be executed.

```jsx
// Method to obtain the current network and validate that we are in the Arbitrum network, otherwise make the network change.
async function getNetwork(sender) {
  Ethers.provider()
    .getNetwork()
    .then((res) => {
      if (res.chainId !== state.blockchain.chainId)
        switchNetwork(state.blockchain.chainId);

      if (res.chainId === 1) res.name = "Ethereum";

      State.update({
        sender,
        blockchain: { ...res },
      });

    });
}
```

**Switch Network**: This method will execute metamask to change the network to the one configured and initialized in the state of the componen (**Arbitrum**).

```jsx
// Method to change network.
function switchNetwork(chainId) {
  Ethers.provider().send("wallet_switchEthereumChain", [
    {
      chainId: `0x${chainId.toString(16)}`,
    },
  ]);
}
```


**Approve Token**: Token approval is the permission granted to smart contracts to spend tokens when users interact with decentralized apps (DApps). In this case, the following method will be used to give permission to the smart contract in charge of Swap so that it can manipulate the token balance and successfully execute the exchange.

```jsx
function onApprove() {
  State.update({
    errorMessage: undefined,
    detailsMessage: { msg: "Please, sign transaction in your wallet" },
    loading: true,
  });

  // We initialize the contract using ethers.Contract
  // where we will send by parameters the address of the smart contract of the token we will approve
  // the ABI that contains all the methods of the contract of the token and finally the account that will be signing the transactions.
  const TokenContract = new ethers.Contract(
    state.swapFrom.token.address,
    OVERRIDE_TOKEN_ERC20_ABI,
    Ethers.provider().getSigner()
  );

  // We create the constants with the values that will be sent to the approve method.
  const spender =
      dataChains[state.blockchain.chainId].AGGREGATOR_CONTRACT_ADDRESS,
    amount = ethers.utils.parseUnits(
      state.swapFrom.value.toString(),
      state.swapFrom.token.decimals
    );

  // We call the method to approve the token.
  TokenContract.approve(spender, amount, OVERRIDE_ARGS)
    .then(({ hash }) => {
      getTokenBalance({
        msg: "Token permited to swap",
        tx: hash,
      });
    })
    .catch((error) => {
      State.update({
        errorMessage: cancelledByUser(error.message) ? null : error.message,
        detailsMessage: null,
        loading: false,
      });
    });
}
```

**Swap**: To do a Swap between tokens we must use the following method which will interact with the smart contract, within this method each of the parameters that will be necessary to send to the smart contract automatically using the values entered in the UI are generated, these parameters are the following:
  * **amount**: amount of Token A to be exchanged.
  * **minReturn**: minimum amount to be returned from the swap.
  * **pools**: pool address used for the swap.
  * **gasLimit**: amount of gas allocated for the execution of the transaction.

```jsx
function onUniswap() {
  State.update({
    errorMessage: undefined,
    detailsMessage: { msg: "Please, sign order with your wallet." },
    loading: true,
  });

  // We initialize the contract using ethers.Contract
  // where we will send by parameters the address of the smart contract,
  // the ABI that contains all the methods of the contract and finally the account that will be signing the transactions.
  const AggregatorRouter = new ethers.Contract(
    dataChains[state.blockchain.chainId].AGGREGATOR_CONTRACT_ADDRESS,
    state.AGGREGATOR_ROUTER_ABI,
    Ethers.provider().getSigner()
  );

  // We create the constants with the values that will be sent to the uniswapV3Swap method, for this case it will be the amount,
  // minReturn and the pool address from where the tokens will be taken for the swap.
  const amount = ethers.utils.parseUnits(
      state.swapFrom.value.toString(),
      state.swapFrom.token.decimals
    ),
    minReturn = ethers.utils.parseUnits(
      getMinReturn().toString(),
      state.swapTo.token.decimals
    ),
    pools = [getPool()];

  // We calculate the gas fee.
  const gasLimit = state.gasFee * Math.pow(10, 17);

  // We call the method to make swap using the above values.
  AggregatorRouter.uniswapV3Swap(amount, minReturn, pools, { gasLimit })
    .then(({ hash }) => {
      getTokenBalance({
        msg: "Transaction completed",
        tx: hash,
      });
    })
    .catch((error) => {
      State.update({
        errorMessage: cancelledByUser(error.message) ? null : error.message,
        detailsMessage: null,
        loading: false,
      });
    });
}
```
## How to test the Component?

To run this project in BOS you must run the widget (Swap.jsx) on an available BOS gateway, for example: [near.social ](https://near.social/edit)

Once the code for the widget has been added we can render it by clicking on the preview button to render the component.

<img src="https://drive.google.com/uc?id=1C5A41cI60Kl1-55f2f-H642JtvxAyM5_" width="50%">

For this example you will also need to have installed and configured [metamask](https://metamask.io/) and the [Arbitrum One Network](https://arbitrum.io/).

Once this is done, you can click **Connect Wallet** to run metamask and connect the component to your account.

<img src="https://drive.google.com/uc?id=1REPFpcc0Ulvo_qEcWqmbf0YMC6BNbldz" width="50%">

Once metamask is connected we will be able to start interacting with the UI.

The first step to do swap between tokens is to select the tokens from the list and then enter the amount of Token A to be converted to Token B (the component will show a preview of how many tokens you will be receiving for that conversion) and to start the swap process we must click on the **Swap button** to execute metamask and confirm the transaction.
We can then view the transaction in the explorer to verify that the swap was successfully executed.

<img src="https://drive.google.com/uc?id=1m2sWolleql2-7kMQWmQ-I_3Pi10PF220" width="50%">

## BOS Widget

Swap: https://near.social/owa-is-bos.near/widget/1Inch-Swap
