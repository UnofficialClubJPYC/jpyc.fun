import { useEffect, useState } from "react";

import Pair from "../../lib/Pair";

function ExchangeRate() {
  const JPYC_ADDRESS = "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c";
  const USDC_ADDRESS = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";
  const rpcNode = "https://polygon-rpc.com/";

  const pair = new Pair(USDC_ADDRESS, JPYC_ADDRESS, rpcNode);

  const [exchangeRate, setExchangeRate] = useState(0);

  /* Round down exchange rate at the second decimal places.
   * @param {number} _exchangeRate - Exchange rate to be rounded down.
   */
  function formatExchangeRate(_exchangeRate) {
    // Input: 122.818747
    return Math.ceil(_exchangeRate * 100) / 100;
  }

  useEffect(() => {
    pair.getExchangeRate().then((rate) => {
      const roundedRate = formatExchangeRate(rate);
      setExchangeRate(roundedRate);
    });
  });

  const renderExchangeRate = () => {
    const isFetched = exchangeRate !== 0;
    const el = <> USDC/JPYC: {exchangeRate}</>;
    return <>{isFetched ? el : ""}</>;
  };

  return <> {renderExchangeRate()}</>;
}

export default ExchangeRate;
