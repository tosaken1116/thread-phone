import React from "react";
import { OlympicCircles } from "../OlympicCircles/OlympicCircles";

interface CardProps {
  scale: number;
  isUsed?: boolean;
}

export const CardNagano1998: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`w-[600px] h-[900px] rounded-[30px] blur-[1.4px] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#fffdee] origin-top-left`}
      style={{
        transform: `scale(${props.scale}) `,
      }}
    >
      <div className="pt-[120px] h-[390px] mx-auto">
        <div className="absolute left-[40%] translate-x-[-50%] w-[270px] h-[270px] rounded-full bg-[repeating-linear-gradient(0deg,#d83129_0_5px,transparent_5px_20px)]"></div>
        <div className="absolute left-[50%] translate-x-[-50%] w-[270px] h-[270px] rounded-full bg-[repeating-linear-gradient(0deg,#d83129_0_10px,transparent_10px_20px)]"></div>
        <div
          className={`absolute left-[60%] translate-x-[-50%] w-[270px] h-[270px] rounded-full bg-[#d83129] flex justify-center items-center`}
        >
          <span className="text-white text-[40px] font-extrabold">JAPAN</span>
        </div>
      </div>
      <div className="mt-[10px]">
        <OlympicCircles />
      </div>
      <div className="text-center text-[20px] mt-[8px]">
        @1993　JOC　TM　JOC　L-005
      </div>
      <div className="mt-[35px] text-center text-[35px] font-bold ">
        1998 NAGANO OLYMPICS
      </div>
      <div className="flex justify-between w-[270px] mx-auto mt-[35px]">
        <div className="text-center text-[56px] text-[#d83129] font-bold">
          長
        </div>
        <div className="text-center text-[56px] text-[#d83129] font-bold">
          野
        </div>
      </div>
      <div className="absolute top-[40px] right-[-470px] rotate-90 origin-top-left flex justify-between w-[480px]">
        <div className="text-nowrap text-[15px]">◀︎ TELEPHONE CARD</div>
        <div className="flex justify-between w-[150px] text-[15px]">
          <span>10</span>
          <span>30</span>
          <span>50</span>
        </div>
      </div>
      {props.isUsed && (
        <>
          <div className="absolute top-100 right-3.5 w-[15px] h-[15px] bg-black rounded-full"></div>
          <div className="absolute top-120 right-3.5 w-[15px] h-[15px] bg-black rounded-full"></div>
        </>
      )}
    </div>
  );
};
