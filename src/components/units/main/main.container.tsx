import { useState } from "react";

//
import MainPresenter from "./main.presenter";

// contract import
import { onClickContract } from "../../../commons/contract/index";

declare const window: typeof globalThis & {
  ethereum: any;
};

const MainContainer = () => {
  const [wallet, setWallet] = useState<string>("");
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);

  const DiceResultArray = [
    "주사위 합",
    "2: x3",
    "3: x2",
    "4: x2",
    "5: lose",
    "6: lose",
    "7: lose",
    "8: lose",
    "9: x2",
    "10: x2",
    "11: x2",
    "12: x3",
  ];

  const onClickConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWallet(account[0]);
      } catch (error) {}
    } else {
      alert("Meta Mask not detected! Install Meta Mask!");
    }
  };

  const onClickRoll = async () => {
    try {
      const diceContract = await onClickContract();
      const result = await diceContract.roll();
      if (result.wait.length === 1) {
        const dice1 = await diceContract.diceArr1();
        const dice2 = await diceContract.diceArr2();
        setDice1(parseInt(dice1[dice1.length - 1]._hex, 16));
        setDice2(parseInt(dice2[dice2.length - 1]._hex, 16));
      }
    } catch (error) {
      alert("please connect your wallet.");
      console.log(error);
    }
  };

  return (
    <MainPresenter
      dice1={dice1}
      dice2={dice2}
      DiceResultArray={DiceResultArray}
      onClickConnectWallet={onClickConnectWallet}
      onClickRoll={onClickRoll}
    />
  );
};

export default MainContainer;
