import { ChangeEvent } from "react";
export interface IMainPresenterProps {
  dice1: number;
  dice2: number;
  diceSum: number;
  contractWait: boolean;
  DiceResultArray: Array<string>;
  onChangeBettingPrice: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickConnectWallet: () => void;
  onClickRoll: () => void;
}
