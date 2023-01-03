// css import
import * as s from "./buttonStyle";

// type import
import { IButtonComponentProps } from "./button.types";

const ButtonComponent = (props: IButtonComponentProps) => {
  return <s.Button>{props.text}</s.Button>;
};

export default ButtonComponent;
