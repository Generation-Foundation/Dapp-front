import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 40px;
  width: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
  font-size: 40px;
  color: #339933;
`;

export const BettingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BettingText = styled.div`
  margin-right: 20px;
  font-size: 30px;
`;

export const BettingInput = styled.input`
  text-align: center;
  outline: none;
  font-size: 19px;
  &:focus {
    border: 1px solid blue;
  }
`;

export const DiceResultContainer = styled.div`
  margin-top: 30px;
  margin-left: -18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DiceResult = styled.div``;

export const DiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin-top: 30px;
`;

export const Sum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 50px;
  color: red;
`;
