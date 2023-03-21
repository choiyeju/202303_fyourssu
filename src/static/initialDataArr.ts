import { IInitialDataArr } from "pages/Home";

export const initialDataArr: IInitialDataArr[] = [
  {
    bgColor: "#fff",
    state: "none",
    stateName: "상태 없음",
    todoArr: [
      {
        todo: "TODO 2",
      },
    ],
  },
  {
    bgColor: "#fcbab5",
    state: "ready",
    stateName: "시작 전",
    todoArr: [
      {
        todo: "TODO 3",
      },
    ],
  },
  {
    bgColor: "#c0f39a",
    state: "ongoing",
    stateName: "진행 중",
    todoArr: [
      {
        todo: "TODO 4",
      },
    ],
  },
  {
    bgColor: "#d3d4d6",
    state: "complete",
    stateName: "완료",
    todoArr: [
      {
        todo: "TODO 1",
      },
    ],
  },
];
