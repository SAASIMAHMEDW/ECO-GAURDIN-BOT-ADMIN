import React from "react";

function NotificationCard() {
  return (
    <>
      <div class="mt-3 mb-3 animated fadeIn faster inset-0 left-0 top-0 z-50 flex flex-col items-center justify-center space-y-4 outline-none focus:outline-none">
        <div class="hover:shodow-lg flex flex-col rounded-2xl bg-white p-8 shadow-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              
              <div class="ml-3 flex flex-col">
                <div class="font-medium leading-none">
                  Delete Your Acccount ?
                </div>
                <p class="mt-1 text-sm leading-none text-gray-600">
                  By deleting your account you will lose your all data
                </p>
              </div>
            </div>
            <button class="flex-no-shrink ml-4 rounded-full border-2 border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg">
              Delete
            </button>
          </div>
        </div>

        {/* <div class="hover:shodow-lg flex flex-col rounded-2xl bg-gray-800 p-8 shadow-md">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-16 w-16 rounded-2xl border border-gray-800 bg-gray-900 p-3 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div class="ml-3 flex flex-col">
                <div class="font-medium leading-none text-gray-100">
                  Delete Your Acccount ?
                </div>
                <p class="mt-1 text-sm leading-none text-gray-500">
                  By deleting your account you will lose your all data
                </p>
              </div>
            </div>
            <button class="flex-no-shrink ml-4 rounded-full border-2 border-red-500 bg-red-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:shadow-lg">
              Delete
            </button>
          </div>
        </div> */}
      </div>
      {/* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 sm:py-12">
         
        <div class="mx-auto max-w-7xl">
             
          <div class="group relative">
                 
            <div class="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                 
            <div class="items-top relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
                     
              <svg
                class="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                         
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                ></path>
                       
              </svg>
                     
              <div class="space-y-2">
                         
                <p class="text-slate-800">
                  Learn how to make a glowing gradient background!
                </p>
                         
                <a
                  href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                  class="block text-indigo-400 transition duration-200 group-hover:text-slate-800"
                  target="_blank"
                >
                  Read Article →
                </a>
                       
              </div>
                   
            </div>
               
          </div>
           
        </div>
      </div> */}
    </>
  );
}

export default NotificationCard;
