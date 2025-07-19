import React from "react";

interface CardProps {
  scale: number;
  price: number;
}

export const CardCheap: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`grid place-content-center w-[600px] h-[900px] rounded-[30px] blur-[1.4px] shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-[#fffdee] origin-top-left`}
      style={{
        transform: `scale(${props.scale}) `,
      }}
    >
      <div className="text-center text-[400px] font-extrabold scale-x-15 text-nowrap">
        てれほんか〜ど{props.price / 10}
      </div>
    </div>
  );
};
