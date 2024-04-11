// Definition of each of the icons used in the component.
const walletIcon = (
    <svg
      class="wallet-icon icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 2C3.79086 2 2 3.79086 2 6V8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10C22 7.79086 20.2091 6 18 6C18 3.79086 16.2091 2 14 2H6ZM16 6H4C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6ZM4 18V8H18C19.1046 8 20 8.89543 20 10V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H14Z"
        fill="#5599FF"
      />
    </svg>
  ),
  ethereumIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1109_41)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#627EEA"
        />
        <path
          d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z"
          fill="white"
          fill-opacity="0.602"
        />
        <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white" />
        <path
          d="M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z"
          fill="white"
          fill-opacity="0.602"
        />
        <path
          d="M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z"
          fill="white"
        />
        <path
          d="M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z"
          fill="white"
          fill-opacity="0.2"
        />
        <path
          d="M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z"
          fill="white"
          fill-opacity="0.602"
        />
      </g>
      <defs>
        <clipPath id="clip0_1109_41">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  arbitrumIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="#2D374B" />
      <path
        d="M27.9997 8.52465C29.2375 7.82512 30.7627 7.82512 32.0005 8.52465L48.0004 17.567C49.2377 18.2663 50 19.5584 50 20.9568V39.0432C50 40.4416 49.2377 41.7337 48.0004 42.433L32.0005 51.4753C30.7627 52.1749 29.2375 52.1749 27.9997 51.4753L11.9998 42.433C10.7625 41.7337 10.0002 40.4416 10.0002 39.0432V20.9568C10.0002 19.5584 10.7625 18.2663 11.9998 17.567L27.9997 8.52465Z"
        fill="#96BEDC"
      />
      <path
        d="M29.3998 10.8701C29.8124 10.6368 30.321 10.6368 30.7336 10.8701L46.5669 19.8209C46.9792 20.054 47.2332 20.4847 47.2332 20.9507V38.8535C47.2332 39.3196 46.9792 39.7503 46.5669 39.9834L30.7336 48.9342C30.321 49.1675 29.8124 49.1675 29.3998 48.9342L13.5665 39.9834C13.1542 39.7503 12.9001 39.3196 12.9001 38.8535V20.9507C12.9001 20.4847 13.1542 20.054 13.5665 19.8209L29.3998 10.8701Z"
        fill="#2D374B"
      />
      <path
        d="M14.3908 43.7844L11.536 42.171C10.5869 41.6346 10 40.6288 10 39.5386L20.7252 23.4779C21.8949 21.7263 23.8887 20.6706 26.0268 20.6706H29.1165L14.3908 43.7844Z"
        fill="white"
      />
      <path
        d="M21.2065 47.6363L16.072 44.7345L31.0332 20.6706H37.5165L21.2065 47.6363Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M42.0537 42.5347L36.363 45.7518L30.1665 36.2631L33.9665 30.0326L42.0537 42.5347ZM47.2332 36.0983V38.8536C47.2332 39.3196 46.9792 39.7503 46.5669 39.9834L43.6755 41.6179L35.0665 28.0917L38.3664 22.6768L47.2332 36.0983Z"
        fill="#28A0F0"
      />
    </svg>
  ),
  arrowDownIcon = (
    <svg
      class="arrow-down icon icon-filled"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
    </svg>
  ),
  chevronDownIcon = (
    <svg
      class="chevron-down icon icon-filled"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
    </svg>
  ),
  chevronLeftIcon = (
    <svg
      class="chevron-left icon icon-filled"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </svg>
  ),
  searchIcon = (
    <svg
      class="search-icon icon icon-filled"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </svg>
  ),
  closeIcon = (
    <svg
      class="close-icon icon icon-filled"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  ),
  externalLinkIcon = (
    <svg
      class="external-link-icon icon"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Interface / External_Link">
        <path
          id="Vector"
          d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );

// Initialization of each of the properties of the state
State.init({
  initialLoading: true,
  loading: false,
  loadingSoft: false,
  sender: undefined,
  showDetails: false,
  tab: 0,
  swapFrom: {},
  swapTo: {},
  search: "",
  tokens: {},
  blockchain: { name: "Arbitrum", chainId: 42161 },
  tokenToUnitValue: undefined,
  tokenToUnitPrice: undefined,
  nativeTokenRate: undefined,
  gasFee: undefined,
  AGGREGATOR_ROUTER_ABI: undefined,
  debounce: undefined,
  errorMessage: undefined,
  detailsMessage: undefined,
});

const FROM_SWAP_PROP = props.fromToken,
  TO_SWAP_PROP = props.toToken,
  CHAINBASE_API =
    "https://arbitrum-mainnet.s.chainbase.online/v1/2c1ajc4DvuMOsVz960d0mYabTRF";

// Definition of available networks and pools
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

const OVERRIDE_ARGS = {
    gasLimit: 2303039,
  },
  OVERRIDE_TOKEN_ERC20_ABI = [
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

// Helper functions for numbers
const debounce = (callback, miliseconds) => {
    clearTimeout(state.debounce);
    State.update({ debounce: setTimeout(callback, miliseconds) });
  },
  bigToNumber = (bigInt, decimals) => {
    decimals ??= dataChains[state.blockchain.chainId].decimals;
    return bigInt / Math.pow(10, decimals);
  },
  exponentToString = (value) => {
    const exponent = value.toString().split("-")[1];
    return value.toFixed(exponent);
  },
  maxDecimals = (val, digits) => {
    digits ??= 2;
    const value = typeof val === "string" ? Number(val) : val;

    return Number(value.toFixed(digits));
  },
  maxDecimalsStric = (val, digits, { stric }) => {
    digits ??= 2;
    stric ??= false;
    const value = typeof val === "string" ? Number(val) : val;

    let str = value.toString(),
      index = str.indexOf(".");

    if (index !== -1) {
      if (stric) {
        str = str.substring(0, index + digits + 1);
        return parseFloat(str);
      } else {
        let nonZeroIndex = index;
        while (str.charAt(++nonZeroIndex) === "0");

        let totalDigits = nonZeroIndex - index - 1 + digits;
        const val = value.toString().split(".");
        val[1] = val[1].substring(0, totalDigits);
        return parseFloat(val.join("."));
      }
    } else {
      return value;
    }
  };

// Function to get quote
async function getQuote(amount, fromToken, toToken) {
  const gasPrice = dataChains[state.blockchain.chainId].gasPrice,
    /* uri = `https://proxy-app.1inch.io/v1.0/v1.5/chain/${state.blockchain.chainId}/router/v5/quotes?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${amount}&gasPrice=${gasPrice}&preset=maxReturnResult&isTableEnabled=true`; */
    uri = `https://proxy-app.1inch.io/v1.0/v1.5/chain/${state.blockchain.chainId}/router/v5/quotes?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${amount}&gasPrice=${gasPrice}&preset=maxReturnResult`;

  asyncFetch(uri)
    .then(({ body }) => {
      const swapFrom = state.swapFrom,
        swapTo = state.swapTo;

      swapTo.value = maxDecimals(
        bigToNumber(body.bestResult.toTokenAmount, swapTo.token.decimals),
        6
      );

      swapFrom.price = undefined;
      swapTo.price = undefined;

      const tokenToUnitValue = maxDecimals(swapTo.value / swapFrom.value);

      State.update({
        swapFrom,
        swapTo,
        tokenToUnitValue,
        loadingSoft: false,
      });
    })
    .catch((error) => State.update({ loadingSoft: false }));
}

// Function to get prices of tokens
async function getPrices() {
  if (!state.swapFrom.value || !state.swapFrom.token || !state.swapTo.token)
    return;

  State.update({ loadingSoft: true });

  const ethWrapper = Object.values(state.tokens).find(
    (e) => e.symbol === "WETH"
  );

  /* get prices receive */
  const amount = ethers.utils.parseUnits(
      Number(state.swapFrom.value || "0").toString(),
      state.swapFrom.token.decimals
    ),
    fromToken =
      /* if from token is ETH, it will be changed to WETH */
      state.swapFrom.token.symbol === "ETH"
        ? ethWrapper.address
        : state.swapFrom.token.address,
    toToken = state.swapTo.token.address,
    walletAddress =
      state.sender ?? "0x0000000000000000000000000000000000000000",
    uri = `https://fusion.1inch.io/quoter/v1.1/${state.blockchain.chainId}/quote/receive?walletAddress=${walletAddress}&fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${amount}&enableEstimate=false`;

  asyncFetch(uri).then(({ body }) => {
    if (!body) return getQuote(amount, fromToken, toToken);

    const swapFrom = state.swapFrom,
      swapTo = state.swapTo;

    swapFrom.price = maxDecimals(
      Number(state.swapFrom.value || 0) * Number(body.prices.usd.fromToken)
    );

    swapTo.value = maxDecimals(
      bigToNumber(body.toTokenAmount, swapTo.token.decimals),
      6
    );
    swapTo.price = maxDecimals(
      Number(swapTo.value || 0) * Number(body.prices.usd.toToken)
    );

    const tokenToUnitValue = swapTo.value / swapFrom.value;

    State.update({
      swapFrom,
      swapTo,
      tokenToUnitValue: maxDecimals(tokenToUnitValue),
      tokenToUnitPrice: maxDecimals(tokenToUnitValue * body.prices.usd.toToken),
      loadingSoft: false,
    });
  });
}

// Function to get token balance
async function getTokenBalance(detailsMessage) {
  if (!state.sender) return;

  const address =
      dataChains[state.blockchain.chainId].AGGREGATOR_CONTRACT_ADDRESS,
    url = `https://proxy-app.1inch.io/v1.0/balance/v1.2/${state.blockchain.chainId}/allowancesAndBalances/${address}/${state.sender}`;

  asyncFetch(url).then(({ body }) => {
    const swapFrom = state.swapFrom,
      swapTo = state.swapTo,
      tokens = Object.fromEntries(
        Object.entries(state.tokens).map(([id, token]) => [
          id,
          {
            ...token,
            balance: bigToNumber(body[id]?.balance, state.tokens[id].decimals),
            allowance: bigToNumber(
              body[id]?.allowance,
              state.tokens[id].decimals
            ),
          },
        ])
      );

    if (swapFrom.token) {
      swapFrom.token.balance = tokens[swapFrom.token.address].balance;
      swapFrom.token.allowance = tokens[swapFrom.token.address].allowance;
    }

    if (swapTo.token) {
      swapTo.token.balance = tokens[swapTo.token.address].balance;
      swapTo.token.allowance = tokens[swapTo.token.address].allowance;
    }

    State.update({
      tokens,
      swapFrom,
      swapTo,
      detailsMessage,
      loading: false,
    });
  });
}

// Get tokens from 1inch api
async function getTokens(AGGREGATOR_ROUTER_ABI) {
  const { ok, body: tokens } = fetch(
    `https://tokens.1inch.io/v1.2/${state.blockchain.chainId}`
  );
  if (!ok) return;

  const swapFrom = state.swapFrom,
    swapTo = state.swapTo;

  if (state.initialLoading) {
    swapFrom.token = Object.values(tokens).find(
      (token) => token.symbol === (FROM_SWAP_PROP ?? "USDT")
    );

    swapTo.token = Object.values(tokens).find(
      (token) => token.symbol === (TO_SWAP_PROP ?? "USDC")
    );
  }

  State.update({
    tokens,
    swapFrom,
    swapTo,
    AGGREGATOR_ROUTER_ABI,
    initialLoading: false,
  });

  if (!state.blockchain) return;

  getNativeTokenRate();
  getTokenBalance();
  getPrices();
}

// Used to calculate gas price on USD
async function getNativeTokenRate() {
  asyncFetch(
    `https://token-rates-aggregator.1inch.io/v1.0/native-token-rate?vs=USD`
  ).then(({ body }) => getFeeBlockchain(body[state.blockchain.chainId].USD));
}

// Function to get fee blockchain
async function getFeeBlockchain(nativeTokenRate) {
  asyncFetch(CHAINBASE_API, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      id: state.blockchain.chainId,
      jsonrpc: "2.0",
      method: "eth_gasPrice",
    }),
  }).then(({ body }) => {
    const gasFee = bigToNumber(body.result);

    State.update({
      nativeTokenRate,
      gasFee,
    });
  });
}

// Function to switch network
function switchNetwork(chainId) {
  Ethers.provider().send("wallet_switchEthereumChain", [
    {
      chainId: `0x${chainId.toString(16)}`,
    },
  ]);
}

// Function to get current network
async function getNetwork(sender) {
  Ethers.provider()
    .getNetwork()
    .then((res) => {
      /* temporary logic */
      if (res.chainId !== state.blockchain.chainId)
        switchNetwork(state.blockchain.chainId);

      if (res.chainId === 1) res.name = "Ethereum";

      State.update({
        sender,
        blockchain: { ...res },
      });

      getTokens(state.AGGREGATOR_ROUTER_ABI);
    });
}

// START - fetch all initial data
function initializeDapp() {
  /* getAccount */
  if (!state.sender && Ethers.provider())
    Ethers.provider()
      .send("eth_requestAccounts", [])
      .then(([sender]) => getNetwork(sender));

  if (!state.initialLoading) return;

  /* get aggregator router abi */
  asyncFetch(
    "https://raw.githubusercontent.com/yaairnaavaa/Maverick/main/aggregator-router.txt"
  ).then(({ body: AGGREGATOR_ROUTER_ABI }) => {
    /* init flow */
    getTokens(AGGREGATOR_ROUTER_ABI);
  });
}
initializeDapp();

// Function to rotate tokens
function switchPositions() {
  const swapFrom = state.swapTo,
    swapTo = state.swapFrom;

  FROM_SWAP_PROP = state.swapTo.token.symbol;
  TO_SWAP_PROP = state.swapFrom.token.symbol;

  swapFrom.value = swapFrom.value ?? "";
  swapTo.value = swapTo.value ?? "";
  swapFrom.selected = false;
  swapTo.selected = false;

  State.update({
    swapFrom,
    swapTo,
    errorMessage: undefined,
    detailsMessage: undefined,
  });
  getPrices();
}

// Function to select token to swap
function selectToken(type) {
  var swap;

  switch (type) {
    case "from":
      {
        swap = state.swapFrom;
        swap.selected = true;
        State.update({
          swapFrom: swap,
          errorMessage: undefined,
          detailsMessage: undefined,
        });
      }
      break;
    case "to":
      swap = state.swapTo;
      swap.selected = true;
      State.update({
        swapTo: swap,
        errorMessage: undefined,
        detailsMessage: undefined,
      });
      break;
  }
}

function onTokenChoosen(token) {
  const swapFrom = state.swapFrom,
    swapTo = state.swapTo,
    savedFrom = { ...state.swapFrom },
    savedTo = { ...state.swapTo };

  /* if havent token just will closed */
  if (!token) {
    swapFrom.selected = false;
    swapTo.selected = false;

    return State.update({ swapFrom, swapTo, search: "" });
  }

  if (state.swapFrom.selected) {
    if (swapTo.token.address === token.address) return switchPositions();
    else {
      swapFrom.token = token;
      FROM_SWAP_PROP = token.symbol;
    }
  } else {
    if (swapFrom.token.address === token.address) return switchPositions();
    else {
      swapTo.token = token;
      TO_SWAP_PROP = token.symbol;
    }
  }

  swapFrom.selected = false;
  swapTo.selected = false;
  State.update({ swapFrom, swapTo });

  if (
    (savedFrom.selected && savedFrom.token.address !== token.address) ||
    (savedTo.selected && savedTo.token.address !== token.address)
  )
    getPrices();
}

// Function to approve token
function onApprove() {
  State.update({
    errorMessage: undefined,
    detailsMessage: { msg: "Please, sign transaction in your wallet" },
    loading: true,
  });

  const TokenContract = new ethers.Contract(
    state.swapFrom.token.address,
    OVERRIDE_TOKEN_ERC20_ABI,
    Ethers.provider().getSigner()
  );

  const spender =
      dataChains[state.blockchain.chainId].AGGREGATOR_CONTRACT_ADDRESS,
    amount = ethers.utils.parseUnits(
      state.swapFrom.value.toString(),
      state.swapFrom.token.decimals
    );

  /* approve(address spender, uint256 amount) */
  TokenContract.approve(spender, amount, OVERRIDE_ARGS)
    .then(({ hash }) => {
      console.log("approve:", hash);

      getTokenBalance({
        msg: "Token permited to swap",
        tx: hash,
      });
    })
    .catch((error) => {
      console.error("approve error:", error);
      State.update({
        errorMessage: cancelledByUser(error.message) ? null : error.message,
        detailsMessage: null,
        loading: false,
      });
    });
}

// Function to swap tokens
function onUniswap() {
  State.update({
    errorMessage: undefined,
    detailsMessage: { msg: "Please, sign order with your wallet." },
    loading: true,
  });

  const AggregatorRouter = new ethers.Contract(
    dataChains[state.blockchain.chainId].AGGREGATOR_CONTRACT_ADDRESS,
    state.AGGREGATOR_ROUTER_ABI,
    Ethers.provider().getSigner()
  );

  const amount = ethers.utils.parseUnits(
      state.swapFrom.value.toString(),
      state.swapFrom.token.decimals
    ),
    minReturn = ethers.utils.parseUnits(
      getMinReturn().toString(),
      state.swapTo.token.decimals
    ),
    pools = [getPool()];

  const gasLimit = state.gasFee * Math.pow(10, 17);

  console.log("data", {
    amountBig: amount.toString(),
    amount: bigToNumber(amount, state.swapFrom.token.decimals),
    minReturnBig: minReturn.toString(),
    minReturn: bigToNumber(minReturn, state.swapTo.token.decimals),
    pools,
  });

  /* uniswapV3Swap(uint256 amount,uint256 minReturn,uint256[] pools) */
  AggregatorRouter.uniswapV3Swap(amount, minReturn, pools, { gasLimit })
    .then(({ hash }) => {
      console.log("uniswapV3Swap:", hash);

      getTokenBalance({
        msg: "Transaction completed",
        tx: hash,
      });
    })
    .catch((error) => {
      console.error("uniswapV3Swap error:", error);
      State.update({
        errorMessage: cancelledByUser(error.message) ? null : error.message,
        detailsMessage: null,
        loading: false,
      });
    });
}

// Function to filter tokens
const filteredTokens = () => {
    const allowedTokens = [
        ...new Set(
          Object.keys(dataChains[state.blockchain.chainId].pools).map(
            (key) => key.split("-")[0]
          )
        ),
      ],
      favoriteTokens = ["ARB", "USDT", "WETH", "ETH", "USDC", "NEAR"],
      filtered = Object.entries(state.tokens)
        .filter(([key, value]) => {
          /* filter by allowed tokens */
          if (!allowedTokens.includes(value.symbol)) return false;
          /* filter by token symbol */
          if (value.symbol.toLowerCase().includes(state.search.toLowerCase()))
            return true;
          /* filter by token name */
          if (value.name.toLowerCase().includes(state.search.toLowerCase()))
            return true;

          return false;
        })
        .sort((a, b) => (a.symbol > b.symbol ? 1 : -1));

    filtered.forEach(([key, value], index) => {
      /* move favorite tokens to top */
      if (favoriteTokens.some((e) => e === value.symbol)) {
        filtered.splice(index, 1);
        filtered.unshift([key, value]);
      }
    });

    return filtered;
  },
  cancelledByUser = (errorMessage) =>
    errorMessage.includes("user rejected transaction"),
  enoughBalance = () => {
    const value = state.swapFrom.value ? Number(state.swapFrom.value) : null,
      balance = state.swapFrom.token.balance,
      ethGasFee = state.gasFee;
    if (!value) return true;

    /* if ETH or WETH increase by gasFee */
    if (
      state.swapFrom.token.symbol === "ETH" ||
      state.swapFrom.token.symbol === "WETH"
    )
      return balance >= value + ethGasFee;

    return balance >= value;
  },
  haveAllowance = () => {
    const allowance = state.swapFrom.token.allowance;
    if (!allowance) return false;

    return allowance >= Number(state.swapFrom.value || "0");
  },
  getPool = () =>
    dataChains[state.blockchain.chainId].pools[
      `${state.swapFrom.token.symbol}-${state.swapTo.token.symbol}`
    ],
  /* this is only used because havent proxy to use 1inch api */
  getMinReturn = () => {
    if (!state.swapTo.value) return 0;

    const priceImpact =
        dataChains[state.blockchain.chainId].priceImpacts[
          state.swapTo.token.symbol
        ],
      comission = (Number(state.swapTo.value) * priceImpact) / 100,
      minReturnComissioned = Number(state.swapTo.value) - comission;

    return maxDecimals(minReturnComissioned, 6);
  };

// Definition of all styles used in the component
const btnStyle = `
background: var(--bg-btn, var(--primary-light));
color: var(--color, var(--primary));
padding: var(--p, 5px 10px);
border: none;
border-radius: var(--br, 12px);
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
width: var(--w-btn, auto);
height: var(--h-btn, auto);
transition: background .2s ease;
text-wrap: nowrap;

&:not(.disabled, [disabled]):hover {
background: var(--bg-btn-hover, var(--primary-hover));
}

&:focus-visible {
outline: 2px solid var(--primary, #06070a);
}
`;

const Wrapper = styled.div`
--margin-app: clamp(16px, 4vw, 24px);
--h-toolbar: 60px;
--h-footer: 60px;

--bg-app: hsl(225, 130%, 1%);
--bg-card: #131823;
--primary: #2f8af5;
--primary-light: #2f8af529;
--primary-hover: rgba(47, 138, 245, 0.5);
--text-color: #6c86ad;

--arbitrum-color: linear-gradient(86.38deg, #28a0f0 3.92%, #0678c4 99.17%);

display: grid;
place-items: center;
min-height: 100dvh;
position: relative;
padding-inline: var(--margin-app);
padding-top: var(--h-toolbar);
padding-bottom: var(--h-footer);
isolation: isolate;
overflow: hidden;

&:before {
content: "";
position: absolute;
inset: 0;
background: var(--bg-app);
z-index: -1;
}

&:after {
content: "";
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
margin: auto;
width: min(100%, 235px);
height: min(100%, 235px);
background: var(--primary);
filter: blur(300px);
z-index: -1;
}

* { color: var(--text-color) }

.icon {
width: var(--w-icon, 20px);
height: var(--w-icon, 20px);

&-filled { fill: var(--text-color) }
}

a:hover { color: var(--primary) }

.btn {
background: var(--bg-btn, var(--primary-light));
color: var(--color, var(--primary));
padding: var(--p, 5px 10px);
border: none;
border-radius: var(--br, 12px);
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
width: var(--w-btn, auto);
height: var(--h-btn, auto);
transition: background .2s ease;

&:hover {
background: var(--bg-btn-hover, var(--primary-hover));
}

&:focus-visible {
outline: 2px solid var(--primary, #06070a);
}
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

input[type=number] {
-moz-appearance: textfield;
}
`,
  SearchInput = styled.div`
border-radius: 12px;
background: #06070a;
height: 50px;
display: flex;
align-items: center;
padding-left: 10px;

.search-icon {
--w-icon: 25px;
}

.clear-btn {
--w-btn: 27px;
--w-icon: 17px;
--bg-btn: transparent;
margin-right: 10px;
}

input {
background: transparent !important;
box-shadow: none !important;
border: none;
caret-color: #fff;
color: #fff !important;

&::placeholder {
color: var(--text-color) !important;
}
}
`,
  Btn = styled.button`${btnStyle}`,
  Btn2 = styled.button`
--color: #fff;
--bg-btn-hover: var(--bg-btn, inherit);
svg:not(.chevron-down) { width: 24px }
${btnStyle}
`,
  BtnIcon = styled.button`
--color: var(--text-color);
--bg-btn: #324054;
--br: 50%;
--p: 0;
--size-btn: 25px;
--w-btn: var(--size-btn);
--h-btn: var(--size-btn);

svg {
width: 18px;
fill: var(--text-color);
}

&:not(.disabled).rotate {
transition: .2s ease;
&:hover {
rotate: 180deg;
svg { fill: #fff }
}
}
${btnStyle}
`,
  Card = styled.div`
--h-btn: 40px;

width: min(100%, 480px);
background: var(--bg, var(--bg-card));
padding: 16px;
border-radius: 25px;
display: flex;
flex-direction: column;
gap: 10px;
box-shadow: 2px 2px 40px -30px rgb(225, 225, 225, .4);
`,
  CardTitle = styled.div`
--text-color: #fff;
display: grid;
place-content: center;
position: relative;
font-size: 20px;

.back-btn {
position: absolute;
top: 0;
bottom: 0;
left: 0;
margin: auto;
--size-btn: 30px;
--w-icon: 25px;
transition: .2s ease;

&:not(:hover) { --bg-btn: transparent }
}
`,
  CardOptions = styled.div`
display: flex;
align-items: center;

> *:not(.active) {
--bg-btn: transparent;
--color: var(--text-color);
}
`,
  CardField = styled.div`
min-height: 104px;
height: var(--h-field, max-content);
padding: 10px 12px;
background: transparent;
border-radius: 18px;
box-shadow: 0 0 0 .4px var(--text-color);

[data-input-top] {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap-reverse;

span + span {
display: flex;
align-items: center;
gap: 5px;
margin-left: auto;

button {
font-size: 12px;
padding: 1px 5px;
height: max-content;
border-radius: 6px;
}
}
}

[data-input-middle] {
display: flex;
align-items: center;
}
[data-input-bottom] {
display: flex;
justify-content: space-between;
}

.empty {
color: var(--text-color);
font-size: 14px;
}

span {
font-size: 13px;
}

input {
background: transparent !important;
border: none;
height: 40px;
text-align: end;
font-size: 24px;
color: #fff;
caret-color: #fff;
padding-right: 0;

&::placeholder {
font-size: 24px;
}

&:focus {
background: inherit;
box-shadow: none;
color: #fff;
}
}

&.active {
position: relative;
background: #06070a;
box-shadow: none;

.switcher {
position: absolute;
bottom: -18px;
left: 0;
right: 0;
margin: auto;
}
}
`,
  CardDetails = styled.div`
background: rgb(0, 0, 0, var(--opacity, .2));
border-radius: 15px;
height: max-content;
overflow: hidden;

span { font-size: 13px }

&.active, &:hover { --opacity: .4 }
&.active .chevron-down { rotate: 180deg }
&:not(.active) > div { display: none }
`,
  CardDetailsHeader = styled.button`
background: transparent;
width: 100%;
height: 48px;
border: none;
padding: 10px 12px;
display: flex;
justify-content: space-between;
align-items: center;

.chevron-down { transition: .2s ease }
`,
  CardDetailsContent = styled.div`
width: 100%;
padding: 10px 12px;
padding-top: 0;

> div {
display: flex;
justify-content: space-between;
align-items: center;
}
`,
  CardMessage = styled.span`
--text-color: var(--text);
--bg-color: rgb(0, 0, 0, .5);

border-radius: 10px;
background: var(--bg-color);
color: var(--text-color);
padding: 8px 10px;
font-size: 13px;
&:first-letter { text-transform: uppercase }

a {
--w-icon: 15px;
font-size: 12px;
float: right;
font-weight: 400;
margin-top: 5px;
color: #fff !important;
position: relative;

&::after {
content: "";
position: absolute;
background: #fff;
left: 0;
right: 0;
bottom: 0;
height: 1px;
border-radius: 10px;
}
}
`,
  TokenContainer = styled.div`
max-height: 300px;
overflow-x: hidden;
overflow-y: auto;
padding-right: ${filteredTokens().length > 5 ? "5px" : "0"};
`,
  TokenItem = styled.button`
border: none;
width: 100%;
background: transparent;
border-radius: 12px;
padding: 8px 5px;
display: flex;
align-items: center;
justify-content: space-between;
transition: background .1s ease;

&:hover {
background: var(--primary-light);
}

img {
width: 40px;
height: 40px;
}

span[data-first-span] {
text-align: start;
}

span[data-last-span] {
text-align: end;
}

span:first-of-type {
--text-color: #fff;
font-size: 16px;

+ span {
font-size: 13px;
text-align: start;
}
}

> div {
display: flex;
gap: 10px;
align-items: center;

> div {
display: flex;
flex-direction: column;
}
}
`,
  Toolbar = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
width: 100vw;
height: var(--h-toolbar);
display: flex;
gap: 10px;
align-items: center;
justify-content: flex-end;
padding-inline: var(--margin-app);
`,
  Loader = styled.div`
--w: 25px;
--h: 25px;
--color-a: var(--primary);
--color-b: #46dff0;

position: relative;
transform: translateZ(0) scale(1);
backface-visibility: hidden;
transform-origin: 0 0;
width: calc(var(--w) * 2);
height: var(--h);

@keyframes loader-o {
0%    { opacity: 1; transform: translate(0 0) }
49.99% { opacity: 1; transform: translate(var(--w),0) }
50%    { opacity: 0; transform: translate(var(--w),0) }
100%    { opacity: 0; transform: translate(0,0) }
}
@keyframes loader {
0% { transform: translate(0,0) }
50% { transform: translate(var(--w),0) }
100% { transform: translate(0,0) }
}
div {
position: absolute;
width: var(--w);
height: var(--h);
border-radius: 50%;
box-sizing: content-box;
}
div:nth-child(1) {
background: var(--color-a);
animation: loader 1s linear infinite;
animation-delay: -0.5s;
}
div:nth-child(2) {
background: var(--color-b);
animation: loader 1s linear infinite;
animation-delay: 0s;
}
div:nth-child(3) {
background: var(--color-a);
animation: loader-o 1s linear infinite;
animation-delay: -0.5s;
}
`,
  Footer = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
height: var(--h-footer);
padding-inline: var(--margin-app);
padding-block: 5px;
background: var(--bg-card);
`;

// Render of the component where the necessary methods for the swap are called
// along with the implementation of each of the previously defined styles.

const tabs = ["Swap" /* "Limit" */],
  loader = (
    <Loader>
      <div></div>
      <div></div>
      <div></div>
    </Loader>
  ),
  swapContent = (
    <Card>
      <CardOptions>
        {tabs.map((tab, index) => (
          <Btn
            disabled={state.loading}
            className={state.tab === index ? "active" : ""}
            onClick={() => State.update({ tab: index })}
          >
            {tab}
          </Btn>
        ))}
      </CardOptions>

      {/* top field */}
      <CardField className="active">
        <div data-input-top>
          <span>You pay</span>
          {state.sender ? (
            <span>
              Balance: {maxDecimals(state.swapFrom.token?.balance ?? 0, 6)}
              <Btn
                disabled={state.loading}
                onClick={() => {
                  const swapFrom = state.swapFrom;
                  swapFrom.value = maxDecimals(swapFrom.token.balance, 6);
                  State.update({ swapFrom });
                  getPrices();
                }}
              >
                Max
              </Btn>
            </span>
          ) : (
            <></>
          )}
        </div>
        <div data-input-middle>
          <Btn2
            disabled={state.loading}
            className={!state.swapFrom.token ? "empty" : ""}
            onClick={() => selectToken("from")}
          >
            {state.swapFrom.token ? (
              <img
                src={state.swapFrom.token.logoURI}
                alt={`${state.swapFrom.token.symbol} logo`}
                width="24"
                height="24"
              />
            ) : (
              <></>
            )}
            {state.swapFrom.token.symbol ?? "Select token"} {chevronDownIcon}
          </Btn2>
          <input
            value={state.swapFrom?.value}
            type="number"
            placeholder="0"
            disabled={state.loading}
            onChange={(e) => {
              /* validate decimals length */
              if (e.target.value.split(".")[1].length === 7) {
                e.stopPropagation();
                e.preventDefault();
                return false;
              }

              const swapFrom = state.swapFrom,
                swapTo = state.swapTo;
              swapFrom.value = e.target.value;

              if (swapFrom.value) {
                State.update({
                  swapFrom,
                  errorMessage: undefined,
                  detailsMessage: undefined,
                });

                debounce(() => getPrices(), 200);
              } else {
                swapTo.value = 0;
                State.update({
                  swapFrom,
                  swapTo,
                  errorMessage: undefined,
                  detailsMessage: undefined,
                });
              }
            }}
          />
        </div>

        <div data-input-bottom>
          <a
            href={`${dataChains[state.blockchain.chainId].urlScan}/token/${
              state.swapFrom.token.address
            }`}
            target="_blank"
          >
            {state.swapFrom.token.name}
          </a>

          <span>{state.swapFrom.price ? `~${state.swapFrom.price}` : ""}</span>
        </div>

        <BtnIcon
          className={[
            "switcher rotate",
            !state.swapFrom.token || !state.swapTo.token ? "disabled" : "",
          ]}
          disabled={
            !state.swapFrom.token || !state.swapTo.token || state.loading
          }
          onClick={switchPositions}
        >
          {arrowDownIcon}
        </BtnIcon>
      </CardField>

      {/* bottom field */}
      <CardField>
        <div data-input-top>
          <span>You receive</span>
          {state.sender ? (
            <span>
              Balance: {maxDecimals(state.swapTo.token?.balance ?? 0, 6)}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div data-input-middle>
          <Btn2
            disabled={state.loading}
            className={!state.swapTo.token ? "empty" : ""}
            onClick={() => selectToken("to")}
          >
            {state.swapTo.token ? (
              <img
                src={state.swapTo.token.logoURI}
                alt={`${state.swapTo.token.symbol} logo`}
                width="24"
                height="24"
              />
            ) : (
              <></>
            )}
            {state.swapTo.token.symbol ?? "Select token"} {chevronDownIcon}
          </Btn2>
          <input
            disabled
            value={state.swapTo?.value}
            type="number"
            placeholder="0"
          />
        </div>

        <div data-input-bottom>
          <a
            href={`${dataChains[state.blockchain.chainId].urlScan}/token/${
              state.swapTo.token.address
            }`}
            target="_blank"
          >
            {state.swapTo.token.name}
          </a>

          <span>{state.swapTo.price ? `~$${state.swapTo.price}` : ""}</span>
        </div>
      </CardField>

      {!tokenToUnitValue && !state.gasFee ? (
        <></>
      ) : (
        <CardDetails className={state.showDetails ? "active" : ""}>
          <CardDetailsHeader
            onClick={() => State.update({ showDetails: !state.showDetails })}
          >
            {state.tokenToUnitValue ? (
              <span style={{ "text-wrap": "wrap" }}>
                {`1 ${state.swapFrom.token.symbol} = ${state.tokenToUnitValue}
    ${state.swapTo.token.symbol}
    ${state.tokenToUnitPrice ? `(~$${state.tokenToUnitPrice})` : ""}`}
              </span>
            ) : (
              <></>
            )}

            <span style={{ marginLeft: "auto" }}>
              {!state.showDetails
                ? state.gasFee
                  ? `Fee $${maxDecimalsStric(
                      state.gasFee * state.nativeTokenRate
                    )}`
                  : ""
                : ""}
              {chevronDownIcon}
            </span>
          </CardDetailsHeader>

          <CardDetailsContent>
            {state.gasFee ? (
              <div>
                <span>Network Fee</span>

                <span>
                  {exponentToString(state.gasFee)} ETH ~
                  {`$${maxDecimalsStric(state.gasFee * state.nativeTokenRate)}`}
                </span>
              </div>
            ) : (
              <></>
            )}
            <div>
              <span>Minimum receive</span>

              <span>
                {getMinReturn()} {state.swapTo.token.symbol}
                {state.tokenToUnitPrice
                  ? `(~$${maxDecimals(
                      getMinReturn() * state.tokenToUnitPrice
                    )})`
                  : ""}
              </span>
            </div>
          </CardDetailsContent>
        </CardDetails>
      )}

      {state.errorMessage ? (
        <CardMessage style={{ "--bg-color": "rgb(235, 64, 52, .5)" }}>
          {state.errorMessage}
        </CardMessage>
      ) : (
        <></>
      )}

      {state.sender ? (
        <Btn
          disabled={
            !getPool() ||
            !state.swapFrom.token ||
            !state.swapTo.token ||
            !state.swapTo.value ||
            state.loading ||
            state.loadingSoft ||
            !enoughBalance()
          }
          style={{ marginTop: "5px" }}
          onClick={haveAllowance() ? onUniswap : onApprove}
        >
          {state.loading || state.loadingSoft
            ? loader
            : !state.swapFrom.token || !state.swapTo.token
            ? "Must select tokens to swap"
            : !getPool()
            ? "Pool Not Found"
            : !state.swapFrom.value
            ? "Must specify the quantity"
            : !enoughBalance()
            ? "Insufficent balance"
            : haveAllowance()
            ? "Swap"
            : `Give permissions to swap ${state.swapFrom.token.symbol}`}
        </Btn>
      ) : (
        <Web3Connect className={Btn} connectLabel="Connect Wallet" />
      )}

      {state.detailsMessage ? (
        <CardMessage
          style={{
            "--bg-color": "var(--primary)",
            "--text-color": "#fff",
            "margin-top": "10px",
          }}
        >
          {state.detailsMessage.msg}
          {state.detailsMessage.tx ? (
            <a
              href={`${dataChains[state.blockchain.chainId].urlScan}/tx/${
                state.detailsMessage.tx
              }`}
              target="_blank"
            >
              See TX here {externalLinkIcon}
            </a>
          ) : (
            <></>
          )}
        </CardMessage>
      ) : (
        <></>
      )}
    </Card>
  ),
  swapTokens = (
    <Card>
      <CardTitle>
        <BtnIcon className="back-btn" onClick={() => onTokenChoosen()}>
          {chevronLeftIcon}
        </BtnIcon>
        Select a token
      </CardTitle>

      <SearchInput>
        {searchIcon}

        <input
          value={state.search}
          placeholder="Search by name"
          onChange={({ target }) => State.update({ search: target.value })}
        />
        {state.search ? (
          <BtnIcon
            className="clear-btn"
            onClick={() => State.update({ search: "" })}
          >
            {closeIcon}
          </BtnIcon>
        ) : (
          <></>
        )}
      </SearchInput>

      <hr style={{ "margin-block": "10px 5px" }} />

      <TokenContainer>
        {filteredTokens().length ? (
          filteredTokens().map(([key, token]) => (
            <TokenItem onClick={() => onTokenChoosen(token)}>
              <div>
                <img src={token.logoURI} alt={`${token.symbol} logo`} />

                <div>
                  <span data-first-span>{token.name}</span>
                  <span>{token.symbol}</span>
                </div>
              </div>

              <span data-last-span>{maxDecimals(token.balance ?? 0, 6)}</span>
            </TokenItem>
          ))
        ) : (
          <h6 style={{ "text-align": "center", "margin-block": "10px 20px" }}>
            Token not found
          </h6>
        )}
      </TokenContainer>
    </Card>
  );

// template rendering
return (
  <Wrapper>
    <Toolbar>
      <Btn2
        disabled={state.loading}
        style={{
          "--bg-btn": "var(--arbitrum-color)",
          "text-transform": "capitalize",
        }}
      >
        {dataChains[state.blockchain.chainId].icon} {state.blockchain.name}
      </Btn2>

      {state.sender ? (
        <Btn
          title={state.sender}
          onClick={() => clipboard.writeText(state.sender)}
        >
          {`${state.sender.substring(0, 6)}...${state.sender.substring(
            state.sender.length - 4,
            state.sender.length
          )}`}
        </Btn>
      ) : (
        <></>
      )}
    </Toolbar>

    {!state.swapFrom.selected && !state.swapTo.selected
      ? swapContent
      : swapTokens}

    <Footer>
      <a href="https://docs.1inch.io" target="_blank" title="1inch network">
        Powered by
        <img src="https://cdn.1inch.io/logo.png" alt="1inch logo" width="50" />
      </a>
    </Footer>
  </Wrapper>
);
