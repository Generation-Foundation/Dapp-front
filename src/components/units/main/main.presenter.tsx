// css import
import * as s from "./main.style";

// component import
import ButtonComponent from "../../commons/button/button";

const MainPresenter = () => {
  return (
    <>
      <s.Wrapper>
        <ButtonComponent text={"Connect Wallet"} />
      </s.Wrapper>
    </>
  );
};

export default MainPresenter;
