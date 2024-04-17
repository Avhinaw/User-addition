import React from "react";

const Card = ({ users }) => {
  return (
    <>
        <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
          <div className="image w-14 h-14 rounded-full bg-zinc-200 overflow-hidden">
            <img src={users.image} alt="" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-semibold text-xl mt-1">{users.name}</h1>
          <h4 className="opacity-60 font-semibold text-sm">{users.email}</h4>
          <p className="text-center text-sm mt-2 font-semibold leading-none tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quaerat obcaecati tenetur.
          </p>
          <button className="px-3 py-2 bg-red-500 text-sm rounded-lg font-semibold text-white mt-3">
            Remove It
          </button>
        </div>
    </>
  );
};

export default Card;
