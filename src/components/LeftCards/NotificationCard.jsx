import React from "react";
import { Button } from "@/components/ui/button";

function NotificationCard({ title, message, isNew,status,dateAndTime, onResolve,onResolveDelete }) {
  return (
    <div className="bg-card mr-4 mt-4 mb-4">
      <div className="border border-gray-200 p-6 rounded-xl">
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
              <div className="font-medium leading-none">{title}</div>
              <p className="mt-1 text-sm leading-none">{message}</p>
            </div>
          </div>
          {/* Display the badge if isNew */}
          {true && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              New
            </div>
          )}
          <div className="mt-4 w-full flex justify-between">
          <p className="ml-8 text-sm">{dateAndTime}</p>
            {
              status=="Resolved" ? (
                <Button variant="destructive" size="sm" className="w-20" onClick={onResolveDelete}>
              Delete
            </Button>
              ) : (
                <Button variant="outline" size="sm" className="w-20" onClick={onResolve}>
              Resolve
            </Button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
