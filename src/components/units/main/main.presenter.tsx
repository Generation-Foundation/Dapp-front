// css import
import * as s from "./main.style";

// component import
import ButtonComponent from "../../commons/button/button";
import DiceComponent from "../../commons/dice/dice";

// type import
import { IMainPresenterProps } from "./main.types";

// library
import { v4 as uuid } from "uuid";

const MainPresenter = (props: IMainPresenterProps) => {
  return (
    <>
      <s.Wrapper>
        <ButtonComponent
          text={"Connect Wallet"}
          onClick={props.onClickConnectWallet}
        />
        <s.Title>Field Bet Craps</s.Title>
        <s.BettingContainer>
          <s.BettingText>Bet:</s.BettingText>
          <s.BettingInput />
        </s.BettingContainer>
        <s.DiceResultContainer>
          {props.DiceResultArray.map((el: string) => (
            <s.DiceResult key={uuid()}>{el}</s.DiceResult>
          ))}
        </s.DiceResultContainer>
        <s.DiceContainer>
          <DiceComponent number={props.dice1} />
          <DiceComponent number={props.dice2} />
        </s.DiceContainer>
        <s.Sum>{props.dice1 + props.dice2}</s.Sum>
        <ButtonComponent text="Roll" onClick={props.onClickRoll} />
      </s.Wrapper>
    </>
  );
};

export default MainPresenter;