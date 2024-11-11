import React from "react";
import { Button } from "@/components/ui/button";
function NotificationCard() {
  return (
    <>
      <div className="bg-card mr-4 mt-4 mb-4 ">
        <div className="border border-gray-200 p-6 rounded-xl ">
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>

              <div className="ml-3 flex flex-col">
                <div className="font-medium leading-none">Title comes Here</div>
                <p className="mt-1 text-sm leading-none ">
                  Description of notification comes here
                </p>
              </div>
            </div>
            <div className="mt-4 w-full flex justify-end">
            <Button variant="destructive" size="sm" className="w-20">
              Resolved
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationCard;
