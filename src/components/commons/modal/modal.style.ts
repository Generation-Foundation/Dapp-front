import styled from "@emotion/styled";

interface IStyle {
  diceSum?: number;
  loseArray?: Array<number>;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 300px;
  height: fit-content;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;
`;

export const Title = styled.div`
  padding-bottom: 10px;
  color: ${(props: IStyle) =>
    props.diceSum
      ? props.loseArray?.includes(props.diceSum)
        ? "red"
        : "blue"
      : "black"};
  font-size: 50px;
`;

export const subTitle = styled.div`
  margin-bottom: 10px;
  color: #000;
  font-size: 30px;
`;

export const DiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
`;

export const Sum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 50px;
  color: ${(props: IStyle) =>
    props.diceSum
      ? props.loseArray?.includes(props.diceSum)
        ? "red"
        : "blue"
      : "black"};
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 30px;
  color: blue;
`;
