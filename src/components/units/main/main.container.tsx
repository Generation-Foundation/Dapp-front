import { ChangeEvent, useState } from "react";

// import presenter
import MainPresenter from "./main.presenter";

// import contract
import { onClickContract } from "../../../commons/contract/index";

// import global state
import { useRecoilState } from "recoil";
import {
  BettingState,
  dice1State,
  dice2State,
  diceSumState,
} from "../../../commons/store";

import { isMobile, browserName } from "react-device-detect";

declare const window: typeof globalThis & {
  ethereum: any;
};

const MainContainer = () => {
  const [wallet, setWallet] = useState<string>("");
  const [bettingPrice, setBettingPrice] = useState<number>(0);
  const [contractWait, setContractWait] = useState(false);
  const [openResultModal, setOpenResultModal] = useState(false);

  // global state
  const [dice1, setDice1] = useRecoilState(dice1State);
  const [dice2, setDice2] = useRecoilState(dice2State);
  const [diceSum, setDiceSum] = useRecoilState(diceSumState);
  const [, setBetting] = useRecoilState(BettingState);

  const winArray = [
    "User Win",
    "2: x3",
    "3: x2",
    "4: x2",
    "9: x2",
    "10: x2",
    "11: x2",
    "12: x3",
  ];

  const loseArray = ["User Lose", "5: lose", "6: lose", "7: lose", "8: lose"];

  const onChangeBettingPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      Number((e.target as HTMLInputElement).value) >= 0 &&
      Number((e.target as HTMLInputElement).value) <= 100
    ) {
      setBettingPrice(Number((e.target as HTMLInputElement).value));
      setBetting(Number((e.target as HTMLInputElement).value));
    } else {
      alert("Put a number between 1 and 100.");
      setBettingPrice(0);
      setBetting(0);
      (e.target as HTMLInputElement).value = "";
    }
  };

  const onClickConnectWallet = async () => {
    console.log(browserName);
    if (browserName === "Mobile Safari" || browserName === "Mobile Chrome") {
      alert("Please go into the Metamask browser.");
      return;
    }

    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(account[0]);
        alert("Connect Wallet!!");
      } catch (error) {}
    } else {
      alert("Meta Mask not detected! Install Meta Mask!");
    }
  };

  const onClickRoll = async () => {
    if (bettingPrice === 0) {
      alert("Put the token in the input");
      return;
    }
    try {
      setContractWait(true);
      if (contractWait) {
        document.body.style.overflow = "hidden";
      }
      const diceContract = await onClickContract();
      const result = await diceContract.roll(String(bettingPrice * 10 ** 18), {
        gasLimit: 2000000,
      });
      const complete = await result.wait();
      if (complete.status === 1) {
        const diceArr = await diceContract.diceResultCheck();
        const dice1 = parseInt(diceArr[0]._hex, 16);
        const dice2 = parseInt(diceArr[1]._hex, 16);
        const diceSum = parseInt(diceArr[2]._hex, 16);
        setDice1(dice1);
        setDice2(dice2);
        setDiceSum(diceSum);
      }
      setContractWait(false);
      setOpenResultModal(true);
    } catch (error) {
      setContractWait(false);
      alert("An error has occurred");
      console.log(error);
    }
  };

  const onClickCloseModal = () => {
    setOpenResultModal(false);
  };

  return (
    <MainPresenter
      wallet={wallet}
      dice1={dice1}
      dice2={dice2}
      diceSum={diceSum}
      contractWait={contractWait}
      openResultModal={openResultModal}
      winArray={winArray}
      loseArray={loseArray}
      onChangeBettingPrice={onChangeBettingPrice}
      onClickConnectWallet={onClickConnectWallet}
      onClickRoll={onClickRoll}
      onClickCloseModal={onClickCloseModal}
    />
  );
};

export default MainContainer;
