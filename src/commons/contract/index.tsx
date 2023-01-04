import { ethers } from "ethers";
import { contractABI } from "./abi";

declare const window: typeof globalThis & {
  ethereum: any;
};

export const onClickContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0xb20e4Db2c6C8F547d940B58E36397bFB1Ce842E5";
  const diceContract = new ethers.Contract(
    contractAddress,
    contractABI,
    singer
  );

  return diceContract;
};
