import { X } from "lucide-react";
import React from "react";

const Dialog = ({ setOpen, children }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center"
    >
      <div className=" bg-amber-200 p-2 rounded-2xl">
        <button
          onClick={() => setOpen(false)}
          className="text-black w-full flex justify-end cursor-pointer"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
