import { ethers } from "ethers";
import { contractABI } from "./abi";

declare const window: typeof globalThis & {
  ethereum: any;
};

export const onClickContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0xf7245D04f34b2F0e27c5221c1ee03D3AEB9454F1";
  const diceContract = new ethers.Contract(
    contractAddress,
    contractABI,
    singer
  );

  return diceContract;
};
