// import components
import ButtonComponent from "../button/button";

// import css
import * as s from "./modal.style";

//import type
import { IModalComponentsProps } from "./modal.types";

// import global state
import { useRecoilState } from "recoil";
import {
  BettingState,
  dice1State,
  dice2State,
  diceSumState,
} from "../../../commons/store";
import DiceComponent from "../dice/dice";

const ModalComponent = (props: IModalComponentsProps) => {
  const [dice1] = useRecoilState(dice1State);
  const [dice2] = useRecoilState(dice2State);
  const [diceSum] = useRecoilState(diceSumState);
  const [betting] = useRecoilState(BettingState);

  const winArray = [2, 3, 4, 9, 10, 11, 12];
  const loseArray = [5, 6, 7, 8];

  return (
    <s.Wrapper>
      <s.Title diceSum={diceSum} loseArray={loseArray}>
        {winArray.includes(diceSum) ? "Win" : "Lose"}
      </s.Title>
      <s.subTitle>
        {winArray.includes(diceSum)
          ? diceSum === 1 || diceSum === 12
            ? "x3"
            : "x2"
          : "Lose"}
      </s.subTitle>
      {diceSum && (
        <>
          <s.DiceContainer>
            <DiceComponent number={dice1} />
            <DiceComponent number={dice2} />
          </s.DiceContainer>
          <s.Sum diceSum={diceSum} loseArray={loseArray}>
            {diceSum}
          </s.Sum>
          {winArray.includes(diceSum) && (
            <>
              <s.Benefit>
                {`You get ${
                  diceSum === 1 || diceSum === 12 ? betting * 3 : betting * 2
                } Tokens`}
              </s.Benefit>
            </>
          )}
        </>
      )}

      <ButtonComponent text="Back" onClick={props.fn} />
    </s.Wrapper>
  );
};

export default ModalComponent;
