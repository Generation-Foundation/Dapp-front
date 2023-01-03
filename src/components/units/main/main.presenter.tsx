// css import
import * as s from "./main.style";

// component import
import ButtonComponent from "../../commons/button/button";
import DiceComponent from "../../commons/dice/dice";

// type import
import { IMainPresenterProps } from "./main.types";

const MainPresenter = (props: IMainPresenterProps) => {
  return (
    <>
      <s.Wrapper>
        <ButtonComponent text={"Connect Wallet"} />
        <s.Title>Field Bet Craps</s.Title>
        <s.BettingContainer>
          <s.BettingText>Bet:</s.BettingText>
          <s.BettingInput />
        </s.BettingContainer>
        <s.DiceResultContainer>
          {props.DiceResultArray.map((el: string) => (
            <s.DiceResult>{el}</s.DiceResult>
          ))}
        </s.DiceResultContainer>
        <s.DiceContainer>
          <DiceComponent number={4} />
          <DiceComponent number={4} />
        </s.DiceContainer>
        <s.Sum>4</s.Sum>
        <ButtonComponent text="Roll" />
      </s.Wrapper>
    </>
  );
};

export default MainPresenter;
