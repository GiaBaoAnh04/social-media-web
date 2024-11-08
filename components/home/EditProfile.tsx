import React from "react";
const EditProfile = () => {
  return (
    <div className="text-dark100_light500 flex h-full w-11/12 flex-col gap-8 pr-4 text-xs font-thin md:text-sm">
      <div className="flex w-full items-center gap-2 border-b border-gray-300">
        <input
          className="w-full bg-transparent px-2 focus:outline-none"
          placeholder="Fullname"
        ></input>
      </div>
      <div className="flex w-full items-center gap-2 border-b border-gray-300">
        <input
          className="w-full bg-transparent px-2 focus:outline-none"
          placeholder="Email"
        ></input>
      </div>
      <div className="flex w-full items-center gap-2 border-b border-gray-300">
        <input
          className="w-full bg-transparent px-2 focus:outline-none"
          placeholder="Phone Number"
        ></input>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="flex w-full items-center gap-2 border-b border-gray-300">
          <input
            className="w-full bg-transparent px-2 focus:outline-none"
            placeholder="Birthday"
          ></input>
        </div>
        <div className="flex w-full items-center gap-2 border-b border-gray-300">
          <input
            className="w-full bg-transparent px-2 focus:outline-none"
            placeholder="Gender"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
