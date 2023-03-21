import React, { useState } from "react";
import test from "assets/test.png";
import { IInitialDataArr } from "pages/Home";

interface Props {
  initialDataIdx: number;
  initialDataArr: IInitialDataArr[];
  setInintalDataArr: Function;
  reload: Function;
}

export default function NewTodo({
  initialDataIdx,
  initialDataArr,
  setInintalDataArr,
  reload,
}: Props) {
  return (
    <div
      className="new-todo"
      onClick={() => {
        let lst: IInitialDataArr[] = initialDataArr;
        lst[initialDataIdx].todoArr.push({ todo: "" });
        setInintalDataArr(lst);
        reload();
      }}
    >
      새로 만들기
      <div>추가</div>
    </div>
  );
}
