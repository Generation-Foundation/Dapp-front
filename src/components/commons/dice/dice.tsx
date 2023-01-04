// css import
import * as s from "./dice.style";

//
import { IDiceComponentProps } from "./dice.types";

// library import
import { v4 as uuid } from "uuid";

const DiceComponent = (props: IDiceComponentProps) => {
  const DiceArray = new Array(props.number).fill(1);

  return (
    <s.Container>
      {(props.number === 1 || props.number === 2) && (
        <s.DatItem>
          {DiceArray.map(() => (
            <s.Dat key={uuid()}></s.Dat>
          ))}
        </s.DatItem>
      )}
      {props.number === 4 && (
        <>
          <s.DatItem>
            <s.Dat></s.Dat>
            <s.Dat></s.Dat>
          </s.DatItem>
          <s.DatItem>
            <s.Dat></s.Dat>
            <s.Dat></s.Dat>
          </s.DatItem>
        </>
      )}
      {(DiceArray.length === 3 ||
        DiceArray.length === 5 ||
        DiceArray.length === 6) && (
        <>
          {props.number === 3 ? (
            <>
              <s.DatItem position="right">
                <s.Dat></s.Dat>
              </s.DatItem>
            </>
          ) : (
            <>
              <s.DatItem>
                <s.Dat></s.Dat>
                <s.Dat></s.Dat>
              </s.DatItem>
            </>
          )}
          <s.DatItem>
            {props.number === 6 ? (
              <>
                <s.Dat></s.Dat>
                <s.Dat></s.Dat>
              </>
            ) : (
              <>
                <s.Dat></s.Dat>
              </>
            )}
          </s.DatItem>

          {props.number === 3 ? (
            <>
              <s.DatItem position="left">
                <s.Dat></s.Dat>
              </s.DatItem>
            </>
          ) : (
            <>
              <s.DatItem>
                <s.Dat></s.Dat>
                <s.Dat></s.Dat>
              </s.DatItem>
            </>
          )}
        </>
      )}
    </s.Container>
  );
};

export default DiceComponent;
