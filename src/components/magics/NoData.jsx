import React from "react";
import { MessageCircleWarning } from "lucide-react";

const NoData = ({ title, desc, date }) => {
  return (
    <div className="h-[calc(100vh-75px)] w-full max-w-lg rounded-lg bg-white dark:bg-black p-6 text-black dark:text-white">
      <div className="mt-4">
        <MessageCircleWarning className="text-red-400 dark:text-green-400" />
        <p className="text-red-400 dark:text-green-400">{title}</p>
        <p className="text-black dark:text-white">{desc}</p>
        <p className="text-black dark:text-white">Time</p>
        <p className="text-red-400 dark:text-green-400">{date}</p>
      </div>
    </div>
  );
};

export default NoData;
