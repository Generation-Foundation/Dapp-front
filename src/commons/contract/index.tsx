import { ethers } from "ethers";
import { contractABI } from "./abi";

declare const window: typeof globalThis & {
  ethereum: any;
};

export const onClickContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0x795a16c44192Fa800603e97Ac7849C3FBDce727d";
  const diceContract = new ethers.Contract(
    contractAddress,
    contractABI,
    singer
  );

  return diceContract;
};
