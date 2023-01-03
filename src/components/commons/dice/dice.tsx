import * as s from "./dice.style";
import { IDiceComponentProps } from "./dice.types";

import { v4 as uuid } from "uuid";

const DiceComponent = (props: IDiceComponentProps) => {
  const DiceArray = new Array(props.number).fill(1);

  console.log(DiceArray.length, "DiceArray");

  return (
    <s.Container>
      {DiceArray.length === 1 ||
        (DiceArray.length === 2 && (
          <s.DatItem>
            {DiceArray.map(() => (
              <s.Dat></s.Dat>
            ))}
          </s.DatItem>
        ))}
      {DiceArray.length === 4 && (
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
    </s.Container>
  );
};

export default DiceComponent;
