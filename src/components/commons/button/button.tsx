// css import
import * as s from "./buttonStyle";

// type import
import { IButtonComponentProps } from "./button.types";

const ButtonComponent = (props: IButtonComponentProps) => {
  return (
    <s.Button onClick={props.onClick} disabled={props.disabled || false}>
      {props.text}
    </s.Button>
  );
};

export default ButtonComponent;
