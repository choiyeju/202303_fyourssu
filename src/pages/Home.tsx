import React, { useState, useEffect } from "react";
import "styles/Home.scss";
import Title from "components/home/Title";
import StateTitle from "components/home/StateTitle";

import { initialDataArr as dataArr } from "static/initialDataArr";
import NewTodo from "components/home/NewTodo";
import TodoBox from "components/home/TodoBox";
import Todo from "components/home/Todo";

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
            // newTodo onClick
            const addTodo: Function = () => {
              let lst: IInitialDataArr[] = initialDataArr;
              lst[initialDataIdx].todoArr.push({ todo: "" });
              setInintalDataArr(lst);
              reload();
            };

            return (
              <div key={initialDataIdx} className="home-state-box">
                <StateTitle
                  cnt={initialData.todoArr.length}
                  title={initialData.stateName}
                  textStyle={{ backgroundColor: initialData.bgColor }}
                />
                {initialData.todoArr.map((todo: ItodoArr, todoIdx: number) => {
                  // todoBox onChange
                  const todoBoxChange: Function = (move: number) => {
                    let lst = initialDataArr;
                    if (todoIdx === 0)
                      lst[initialDataIdx].todoArr.splice(todoIdx, todoIdx + 1);
                    else lst[initialDataIdx].todoArr.splice(todoIdx, todoIdx);
                    lst[initialDataIdx + move].todoArr.push({
                      todo: todo.todo,
                    });
                    setInintalDataArr(lst);
                    reload();
                  };

                  // todo onChange
                  const todoChange: React.ChangeEventHandler<
                    HTMLInputElement
                  > = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const text = e.target.value;
                    let lst = initialDataArr;
                    lst[initialDataIdx].todoArr[todoIdx].todo = text;
                    setInintalDataArr(lst);
                    reload();
                  };

                  return (
                    <TodoBox key={todoIdx} todoBoxChange={todoBoxChange}>
                      <Todo todo={todo.todo} todoChange={todoChange} />
                    </TodoBox>
                  );
                })}
                <NewTodo addTodo={addTodo} />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
