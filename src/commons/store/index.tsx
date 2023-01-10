import { atom } from "recoil";

export const dice1State = atom({
  key: "dice1State",
  default: 1,
});

export const dice2State = atom({
  key: "dice2State",
  default: 1,
});

export const diceSumState = atom({
  key: "diceSumState",
  default: 2,
});

export const BettingState = atom({
  key: "BettingState",
  default: 0,
});
