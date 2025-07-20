import React from "react";

interface CardProps {
  scale: number;
}

export const CardGeneral105: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`grid place-content-center w-[600px] h-[900px] rounded-[30px] blur-[1.4px] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#fffdee] origin-top-left`}
      style={{
        transform: `scale(${props.scale}) `,
      }}
    >
      <div className="rotate-90 w-[900px] h-[600px] mx-auto rounded-[30px] overflow-hidden">
        <div className="w-full h-[500px] bg-[linear-gradient(to_bottom,#74bd4b,#dfeeca)]">
          <div className="flex justify-between items-center w-[450px] h-[60px] ml-[200px] text-white text-[25px]">
            <span>0 1</span>
            <span>5</span>
            <span>10</span>
            <span>30</span>
            <span>50</span>
            <span>100</span>
            <span>105</span>
          </div>
          <div className="text-[90px] font-extralight mt-[50px] ml-[110px] text-white">
            TELEPHONE
          </div>
          <div className="flex">
            <div className="text-[90px] font-extralight ml-[210px] mt-[-40px] text-white">
              CARD
            </div>
            <div className="text-[180px]  ml-[20px] mt-[-80px] text-white">
              105
            </div>
          </div>
          <div className="flex justify-center">
            <span className="text-white text-[40px] font-bold bg-[#70bb48] rounded-[50%] px-10 py-1 mx-auto mt-[-50px]">
              テレフォンカード
            </span>
          </div>
        </div>
        <div className="h-[100px] bg-[#70bb48] text-white flex justify-between items-center font-bold px-5">
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
