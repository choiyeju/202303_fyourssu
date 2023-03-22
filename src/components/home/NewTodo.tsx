import React, { useState } from "react";
import test from "assets/test.png";
import { IInitialDataArr } from "pages/Home";

interface Props {
  addTodo: Function;
}

export default function NewTodo({ addTodo }: Props) {
  return (
    <div
      className="new-todo"
      onClick={() => {
        addTodo();
      }}
    >
      새로 만들기
      <div>추가</div>
    </div>
  );
}
