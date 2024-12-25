import React from "react";

export const Loader1 = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="h-4 w-4 animate-bounce rounded-full bg-red-500" />
      <div className="h-4 w-4 animate-bounce rounded-full bg-red-500 [animation-delay:-.3s]" />
      <div className="h-4 w-4 animate-bounce rounded-full bg-red-500 [animation-delay:-.5s]" />
    </div>
  );
};

export const Loader2 = ({ text }) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] [animation-delay:-.3s]"></div>
          <div className="h-4 w-4 animate-bounce rounded-full bg-[#8411e9] [animation-delay:-.5s]"></div>
        </div>
        <h3 className="m-5 text-justify">{text}</h3>
      </div>
    </div>
  );
};
