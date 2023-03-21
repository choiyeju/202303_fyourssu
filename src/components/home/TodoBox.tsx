import React, { useState, useEffect, ReactNode } from "react";
import { IInitialDataArr } from "pages/Home";

// 상태 없음 none
// 시작 전 ready
// 진행 중 ongoing
// 완료 complete

interface Props {
  children: ReactNode;
  initialDataIdx: number;
  todoIdx: number;
  todo: string;
  initialDataArr: IInitialDataArr[];
  setInintalDataArr: Function;
  reload: Function;
}

export default function TodoBox({
  children,
  initialDataIdx,
  todoIdx,
  todo,
  initialDataArr,
  setInintalDataArr,
  reload,
}: Props) {
  const [dragStart, setDragStart] = useState<number>(0);

  return (
    <div
      className="todo-box"
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
        const screen = document.body.clientWidth - 1200;
        if (screen >= 0) {
          setDragStart(e.clientX - screen / 2);
          return;
        }
        setDragStart(e.clientX);
      }}
      onDragEnd={(e: React.DragEvent<HTMLDivElement>) => {
        const screen = document.body.clientWidth - 1200;
        let dragEnd = e.clientX;
        if (screen >= 0) {
          dragEnd = e.clientX - screen / 2;
        }

        let calc = dragEnd - dragStart;
        if (calc > 0) calc = (calc + 80) / 300;
        else calc = (calc - 80) / 300;
        const move = calc > 0 ? Math.floor(calc) : Math.ceil(calc);
        const able =
          (0 <= calc - move && calc - move <= 0.5) ||
          (0 >= calc - move && calc - move >= -0.5);

        if (able) {
          let lst = initialDataArr;
          if (todoIdx === 0)
            lst[initialDataIdx].todoArr.splice(todoIdx, todoIdx + 1);
          else lst[initialDataIdx].todoArr.splice(todoIdx, todoIdx);
          lst[initialDataIdx + move].todoArr.push({ todo: todo });

          setInintalDataArr(lst);
        }

        reload();
      }}
      draggable={true}
    >
      {children}
    </div>
  );
}
