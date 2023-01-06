import { ethers } from "ethers";
import { contractABI } from "./abi";

declare const window: typeof globalThis & {
  ethereum: any;
};

export const onClickContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0xAFf61920A727486e59d175b12167c2658f5832E1";
  const diceContract = new ethers.Contract(
    contractAddress,
    contractABI,
    singer
  );

  return diceContract;
};
