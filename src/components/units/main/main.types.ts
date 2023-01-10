import { ChangeEvent } from "react";
export interface IMainPresenterProps {
  wallet: string;
  dice1: number;
  dice2: number;
  diceSum: number;
  contractWait: boolean;
  openResultModal: boolean;
  winArray: Array<string>;
  loseArray: Array<string>;
  onChangeBettingPrice: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickConnectWallet: () => void;
  onClickRoll: () => void;
  onClickCloseModal: () => void;
}
