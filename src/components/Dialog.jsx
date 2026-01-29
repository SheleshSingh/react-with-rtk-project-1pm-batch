import { X } from "lucide-react";

const Dialog = ({ setOpen, children, message }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-amber-200 p-2 rounded-2xl"
      >
        <button
          onClick={() => setOpen(false)}
          className="text-black w-full flex justify-end cursor-pointer"
        >
          <X />
        </button>
        <h1 className="text-center text-3xl font-semibold">
          {message || "Enter Form Name"}
        </h1>
        {children}
       
      </div>
    </div>
  );
};

export default Dialog;
