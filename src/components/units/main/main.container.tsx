import MainPresenter from "./main.presenter";

const MainContainer = () => {
  const DiceResultArray = [
    "주사위 합",
    "2: x3",
    "3: x2",
    "4: x2",
    "5: lose",
    "6: lose",
    "7: lose",
    "8: lose",
    "9: x2",
    "10: x2",
    "11: x2",
    "12: x3",
  ];

  return <MainPresenter DiceResultArray={DiceResultArray} />;
};

export default MainContainer;
