import React, { useState, useEffect } from "react";
import "styles/Home.scss";
import Title from "components/home/Title";
import StateTitle from "components/home/StateTitle";

import { initialDataArr as dataArr } from "static/initialDataArr";
import NewTodo from "components/home/NewTodo";
import TodoBox from "components/home/TodoBox";

// 상태 없음 none
// 시작 전 ready
// 진행 중 ongoing
// 완료 complete

export interface IInitialDataArr {
  bgColor: string;
  state: string;
  stateName: string;
  todoArr: ItodoArr[];
}

export interface ItodoArr {
  todo: string;
}

export default function Home() {
  const [num, setNum] = useState<number>(0);
  const reload = () => {
    setNum(num + 1);
  };
  const [initialDataArr, setInintalDataArr] =
    useState<IInitialDataArr[]>(dataArr);

  return (
    <div className="home-main">
      <Title data={initialDataArr} />
      <hr />
      <div className="home-contents">
        {initialDataArr.map(
          (initialData: IInitialDataArr, initialDataIdx: number) => {
            return (
              <div key={initialDataIdx} className="home-state-box">
                <StateTitle
                  cnt={initialData.todoArr.length}
                  title={initialData.stateName}
                  textStyle={{ backgroundColor: initialData.bgColor }}
                />
                {initialData.todoArr.map((todo: ItodoArr, todoIdx: number) => {
                  return (
                    <TodoBox
                      key={todoIdx}
                      initialDataIdx={initialDataIdx}
                      todoIdx={todoIdx}
                      todo={todo.todo}
                      initialDataArr={initialDataArr}
                      setInintalDataArr={setInintalDataArr}
                      reload={reload}
                    >
                      <div>{todo.todo}</div>
                    </TodoBox>
                  );
                })}
                <NewTodo
                  initialDataIdx={initialDataIdx}
                  initialDataArr={initialDataArr}
                  setInintalDataArr={setInintalDataArr}
                  reload={reload}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
