//connect to Web3 provider
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
});

//  Enable session (triggers QR Code modal)
await provider.enable();

//creates new Web3 instance
const web3Provider = new providers.Web3Provider(provider);

// Subscribe to accounts change
provider.on("accountsChanged", (accounts: string[]) => {
  console.log(accounts);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId: number) => {
  console.log(chainId);
});

// Subscribe to session disconnection
provider.on("disconnect", (code: number, reason: string) => {
  console.log(code, reason);
});



