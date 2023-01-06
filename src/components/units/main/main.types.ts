import { ChangeEvent } from "react";
export interface IMainPresenterProps {
  dice1: number;
  dice2: number;
  DiceResultArray: Array<string>;
  onChangeBettingPrice: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickConnectWallet: () => void;
  onClickRoll: () => void;
}
