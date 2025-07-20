import React from "react";

interface CardProps {
  scale: number;
}

export const CardGeneral50: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`grid place-content-center w-[600px] h-[900px] rounded-[30px] blur-[1.4px] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#fffdee] origin-top-left`}
      style={{
        transform: `scale(${props.scale}) `,
      }}
    >
      <div className="rotate-90 w-[900px] h-[600px] mx-auto rounded-[30px] overflow-hidden">
        <div className="w-full h-[500px] bg-[linear-gradient(to_bottom,#0099dc,#c8e6fa)]">
          <div className="flex justify-between items-center w-[300px] h-[60px] ml-[200px] text-white text-[25px]">
            <span>0 1</span>
            <span>5</span>
            <span>10</span>
            <span>30</span>
            <span>50</span>
          </div>
          <div className="text-[90px] font-extralight mt-[50px] ml-[110px] text-white">
            TELEPHONE
          </div>
          <div className="flex">
            <div className="text-[90px] font-extralight ml-[210px] mt-[-40px] text-white">
              CARD
            </div>
            <div className="text-[180px]  ml-[20px] mt-[-80px] text-white">
              50
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-white text-[40px] font-bold bg-[#2996c8] rounded-[50%] px-10 py-1 mx-auto mt-[-50px]">
              テレホンカード
            </span>
          </div>
        </div>
        <div className="h-[100px] bg-[#2996c8] text-white flex justify-between items-center font-bold px-5">
          <div>
            <span className="text-[50px]">◀︎IN</span>
            <span className="text-[25px] ml-1">
              矢印の方向にお入れください。
            </span>
          </div>
          <span className="text-[25px]">MTTω</span>
        </div>
      </div>
    </div>
  );
};
