import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100px;
  height: 100px;
  border: 5px solid black;
`;

export const DatContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Dat = styled.div`
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
`;
