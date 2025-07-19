import React from "react";
import { OlympicCircles } from "../OlympicCircles/OlympicCircles";

interface CardProps {
  scale: number;
}

export const CardTokyo1964: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`w-[600px] h-[900px] rounded-[30px] blur-[1.4px] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#fffdee] origin-top-left`}
      style={{
        transform: `scale(${props.scale}) `,
      }}
    >
      <div className="pt-2">
        <div
          className={`w-[500px] h-[500px] rounded-full bg-[#d83129] mx-auto`}
        ></div>
      </div>
      <div className="mt-[32px]">
        <OlympicCircles overrideColor="#b4a082" scale={1.5} />
      </div>
      <div className="mt-[40px] text-center text-[100px] font-extrabold scale-x-80 text-[#b4a082] text-nowrap">
        TOKYO 1964
      </div>
    </div>
  );
};
