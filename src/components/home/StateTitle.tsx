import React from "react";
import threedot_24 from "assets/threedot_24.png";
import plus_24 from "assets/plus_24.png";

interface Props {
  cnt: number;
  title: string;
  textStyle: {
    backgroundColor: string;
  };
}

export default function StateTitle({ cnt, title, textStyle }: Props) {
  return (
    <div className="state-title">
      <div>
        <span className="state-title-text" style={textStyle}>
          {title}
        </span>{" "}
        <span>{cnt}</span>
      </div>
      <div className="state-title-right">
        <img src={threedot_24} />
        <img src={plus_24} />
      </div>
    </div>
  );
}
