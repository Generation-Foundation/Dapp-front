// css import
import * as s from "./main.style";
import { Spin } from "antd";

// component import
import ButtonComponent from "../../commons/button/button";
import DiceComponent from "../../commons/dice/dice";

// type import
import { IMainPresenterProps } from "./main.types";

// library
import { v4 as uuid } from "uuid";
import ModalComponent from "../../commons/modal/modal";

const MainPresenter = (props: IMainPresenterProps) => {
  return (
    <>
      <s.Wrapper>
        {props.contractWait && (
          <s.LoadingContainer>
            <Spin tip="Loading" size="large" />
            <s.Test>{props.test}</s.Test>
          </s.LoadingContainer>
        )}
        {props.openResultModal && (
          <s.LoadingContainer>
            <ModalComponent fn={props.onClickCloseModal} />
          </s.LoadingContainer>
        )}
        <ButtonComponent
          text={
            props.wallet === ""
              ? "Please connect your wallet."
              : "Your wallet is connected."
          }
          onClick={props.onClickConnectWallet}
          disabled={props.wallet === "" ? false : true}
        />
        <s.Title>Field Bet Craps</s.Title>
        <s.BettingContainer>
          <s.BettingText>Bet:</s.BettingText>
          <s.BettingInput
            onChange={props.onChangeBettingPrice}
            placeholder="Just enter the numbers."
          />
        </s.BettingContainer>
        <s.DiceResultContainer>
          <s.DiceResultBox>
            {props.winArray.map((el: string) => (
              <div key={uuid()}>{el}</div>
            ))}
          </s.DiceResultBox>
          <s.DiceResultBox>
            {props.loseArray.map((el: string) => (
              <div key={uuid()}>{el}</div>
            ))}
          </s.DiceResultBox>
        </s.DiceResultContainer>
        <s.DiceContainer>
          <DiceComponent number={props.dice1} />
          <DiceComponent number={props.dice2} />
        </s.DiceContainer>
        <s.Sum>{props.diceSum}</s.Sum>
        <ButtonComponent text="Roll" onClick={props.onClickRoll} />
      </s.Wrapper>
    </>
  );
};

export default MainPresenter;
