import React, { useState, useEffect, ReactNode } from "react";
import { IInitialDataArr } from "pages/Home";

import threedot_24 from "assets/threedot_24.png";

// 상태 없음 none
// 시작 전 ready
// 진행 중 ongoing
// 완료 complete

interface Props {
  todo: string;
  todoChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Todo({ todo, todoChange }: Props) {
  return (
    <div className="todo">
      <input
        value={todo}
        placeholder="할 일을 입력하십쇼"
        onChange={todoChange}
      />
      <img src={threedot_24} className="todo-img" />
    </div>
  );
}
