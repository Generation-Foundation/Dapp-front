export interface IMainPresenterProps {
  dice1: number;
  dice2: number;
  DiceResultArray: Array<string>;
  onClickConnectWallet: () => void;
  onClickRoll: () => void;
}
