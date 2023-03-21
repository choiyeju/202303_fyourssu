import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import search_24 from "assets/search_24.png";
import { IInitialDataArr } from "pages/Home";

import { motion } from "framer-motion";

interface Props {
  data: IInitialDataArr[];
}

export default function Title({ data }: Props) {
  const [visible, setVisible] = useState<number>(0);
  const [alertText, setAlertText] = useState<string>("검색된 값 없음");

  function isTodo(text: string) {
    for (let i = 0; i < data.length; i++)
      for (let j = 0; j < data[i].todoArr.length; j++)
        if (data[i].todoArr[j].todo === text) {
          setAlertText(`${data[i].state}Arr에 값 '${text}'가 검색되었습니다!`);
          return;
        }
    setVisible(1);
    setAlertText("검색된 값 없음");
  }

  const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  `;
  const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
  `;

  const SearchAlert = styled.div<{ visible: number }>`
    padding: 0 20px;
    position: absolute;
    left: 756px;

    border: 1px solid #999;
    border-radius: 5px;
    background-color: #fff;
    transition: 0.8s all;

    animation-name: ${(props) => (props.visible === 0 ? fadeOut : fadeIn)};
    animation-duration: 0.8s;
    animation-timing-function: ease-out;
    opacity: ${(props) => props.visible};
  `;

  // opacity: ${(props) => (props.visible === 0 ? 1 : 0)};
  // animation-name: ${(props) => props.visible === 0 ? `${fadeIn}` : `${fadeOut}`};
  // animation: change 3s;
  // @keyframes change {
  //   0% {
  //     transition-timing-function: cubic-bezier(1, 0, 0.2, 0.5);
  //   }
  //   0% {
  //     width: 0;
  //   }
  // }
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
                if (text === "") setVisible(0);
                else data.find(() => isTodo(text));
              }}
            />
          </div>
        </div>
      </div>
      {/* {visible && */}
      <SearchAlert visible={visible}>{alertText}</SearchAlert>
      {/* )} */}
    </>
  );
}
