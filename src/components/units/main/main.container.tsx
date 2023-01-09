import { ChangeEvent, useState } from "react";

//
import MainPresenter from "./main.presenter";

// contract import
import { onClickContract } from "../../../commons/contract/index";

declare const window: typeof globalThis & {
  ethereum: any;
};

const MainContainer = () => {
  const [wallet, setWallet] = useState<string>("");
  const [bettingPrice, setBettingPrice] = useState<number>(0);
  const [dice1, setDice1] = useState<number>(1);
  const [dice2, setDice2] = useState<number>(1);
  const [diceSum, setDiceSum] = useState<number>(2);
  const [contractWait, setContractWait] = useState(false);

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

  const onChangeBettingPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setBettingPrice(Number((e.target as HTMLInputElement).value));
  };

  const onClickConnectWallet = async () => {
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
    try {
      setContractWait(true);
      if (contractWait) {
        document.body.style.overflow = "hidden";
      }
      const diceContract = await onClickContract();
      const result = await diceContract.roll(String(bettingPrice * 10 ** 18), {
        gasLimit: 100000,
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
    } catch (error) {
      setContractWait(false);
      alert(error);
      console.log(error);
    }
  };

  console.log();

  return (
    <MainPresenter
      dice1={dice1}
      dice2={dice2}
      diceSum={diceSum}
      contractWait={contractWait}
      DiceResultArray={DiceResultArray}
      onChangeBettingPrice={onChangeBettingPrice}
      onClickConnectWallet={onClickConnectWallet}
      onClickRoll={onClickRoll}
    />
  );
};

export default MainContainer;
