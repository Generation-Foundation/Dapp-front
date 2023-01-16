import { ethers } from "ethers";
import { rollContractABI } from "./rollAbi";
import { approveContractABI } from "./approveAbi";

declare const window: typeof globalThis & {
  ethereum: any;
};

export const executeRollContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0x2634DaF3363545D0e2768A166a39D731AA8224b5";
  const diceContract = new ethers.Contract(
    contractAddress,
    rollContractABI,
    singer
  );

  return diceContract;
};

export const executeApproveContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const singer = provider.getSigner();
  const contractAddress = "0x3F4d048C533E09696F5Eaa4A138922D0399Cb92d";
  const diceContract = new ethers.Contract(
    contractAddress,
    approveContractABI,
    singer
  );

  return diceContract;
};
