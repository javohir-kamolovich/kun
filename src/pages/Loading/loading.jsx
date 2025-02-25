import React from "react";

const Loading = () => {
  return (
    <div className="">
      <div className=" w-[228px] h-[228px] p-4 mx-auto  border border-blue-300 rounded-md">
        <div className="flex items-center justify-center space-x-4 animate-pulse">
          <div className="bg-gray-200 rounded-full size-10"></div>
          <div className="flex-1 py-1 space-y-6">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 col-span-2 bg-gray-200 rounded"></div>
                <div className="h-2 col-span-1 bg-gray-200 rounded"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
