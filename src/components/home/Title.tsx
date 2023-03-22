import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import search_24 from "assets/search_24.png";
import { IInitialDataArr } from "pages/Home";

interface Props {
  data: IInitialDataArr[];
}

export default function Title({ data }: Props) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [fadeNText, setFadeNText] = useState("");
  const [alertText, setAlertText] = useState<string[]>(["", ""]);

  function isTodo(text: string) {
    for (let i = 0; i < data.length; i++)
      for (let j = 0; j < data[i].todoArr.length; j++)
        if (data[i].todoArr[j].todo === text) {
          setFadeNText("text-max");
          setAlertText([data[i].state, text]);
          return;
        }
    if (fadeNText === "text-max") setFadeNText("text-min");
    setAlertText(["", ""]);
  }

  return (
    <>
      <div className="home-title">
        <h1>Vanilla JS DRAG & DROP Todo List 구현(50점)</h1>
        <hr />

        <div className="home-menu">
          <div className="menu-left">
            <h2>Todo List</h2>
            <div className="menu-show">+보기 추가</div>
          </div>
          <div className="menu-right">
            <img src={search_24} />
            <input
              className="menu-input"
              placeholder="검색"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const text = e.target.value;
                if (text === "") {
                  if (fadeNText === "text-max") setFadeNText("fade-out-max");
                  else setFadeNText("fade-out-min");
                  setTimeout(() => {
                    setShowSideMenu(false);
                  }, 500);
                } else if (text.length === 1) {
                  if (
                    fadeNText !== "fade-in" &&
                    fadeNText !== "text-max" &&
                    fadeNText !== "text-min"
                  )
                    setFadeNText("fade-in");
                  setTimeout(() => {
                    setShowSideMenu(true);
                  }, 100);
                } else {
                  data.find(() => {
                    isTodo(text);
                  });
                }
              }}
            />
          </div>
        </div>
      </div>
      {showSideMenu && (
        <div className={"search-alert " + fadeNText}>
          {alertText[0] === "" ? (
            <>검색된 값 없음</>
          ) : (
            <>
              <span>{alertText[0]}Arr</span>에 값 '<span>{alertText[1]}</span>
              '가 검색되었습니다!
            </>
          )}
        </div>
      )}
    </>
  );
}
