import { V2Fetcher } from "anyswap-fetcher";

class Pair {
  constructor(token0Addr, token1Addr, rpcNode) {
    this.token0Addr = token0Addr;
    this.token1Addr = token1Addr;
    this.rpcNode = rpcNode;
  }

  async getExchangeRate() {
    const quickSwap = new V2Fetcher(this.token0Addr, this.token1Addr, this.rpcNode, "QUICK");
    const rate = await quickSwap.fetchExchangeRate();

    return rate;
  }
}

export default Pair;
