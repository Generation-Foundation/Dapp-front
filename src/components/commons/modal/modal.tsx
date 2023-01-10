import ButtonComponent from "../button/button";
import * as s from "./modal.style";
import { IModalComponentsProps } from "./modal.types";

const ModalComponent = (props: IModalComponentsProps) => {
  return (
    <s.Wrapper>
      <s.Title>{props.title}</s.Title>
      <s.subTitle>{props.subTitle}</s.subTitle>
      <ButtonComponent text="Back" onClick={props.fn} />
    </s.Wrapper>
  );
};

export default ModalComponent;
