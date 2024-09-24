import React from "react";

function NotificationCard() {
  return (
    <>
      <div className="animated fadeIn faster inset-0 left-0 top-0 z-50 mb-3 mt-3 flex flex-col items-center justify-center space-y-4 outline-none focus:outline-none">
        <div className="hover:shodow-lg flex flex-col rounded-2xl bg-[--background-color] p-6 text-white shadow-md">
          <div className="flex items-center justify-between">
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
                <p className="mt-1 text-sm leading-none text-gray-300">
                  Description of notification comes here
                </p>
              </div>
            </div>
            <button className="flex-no-shrink ml-4 rounded-full bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm transition-all hover:bg-white hover:text-black hover:shadow-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotificationCard;
