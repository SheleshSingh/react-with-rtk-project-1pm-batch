import { X } from "lucide-react";

const Dialog = ({ setOpen, children, message, formId, text, style }) => {
  return (
    <div
      onClick={() => setOpen(false)}
      className="w-full h-screen bg-black/60 fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-amber-100 p-2 rounded-2xl"
      >
        <button
          onClick={() => setOpen(false)}
          className="text-black w-full flex justify-end cursor-pointer"
        >
          <X />
        </button>
        <h1
          style={style}
          className="flex justify-center items-center text-3xl font-semibold"
        >
          {message || "Enter Form Name"}
        </h1>
        {children}
        <div className="flex justify-end gap-5">
          <button
            onClick={() => setOpen(false)}
            className="bg-black text-white px-5 py-2 rounded active:scale-80 transition duration-400"
          >
            Cancel
          </button>
          <button
            form={formId}
            type="submit"
            className="bg-black text-white px-5 py-2 rounded active:scale-80 transition duration-400"
          >
            {text || "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
