import { Heart, Plus } from "lucide-react";
import Dialog from "./Dialog";
import { useState } from "react";
import CreateForm from "./form/CreateForm";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-amber-500 shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600 border-2 cursor-pointer border-black px-5 py-1  rounded-2xl">
        Logo
      </div>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="Searchbar..."
          className="w-64 px-4 py-2 border rounded outline-none"
        />

        <div className="w-10 h-10 bg-black rounded-full  flex items-center justify-center text-white  cursor-pointer active:scale-80 transition duration-400">
          <Heart />
        </div>
        <button
          onClick={() => setOpen(true)}
          className="w-10 h-10 bg-black rounded-full  flex items-center justify-center text-white  cursor-pointer active:scale-80 transition duration-400"
        >
          <Plus />
        </button>
      </div>
      {open && (
        <Dialog setOpen={setOpen} formId={"userCreate"}>
          <CreateForm />
        </Dialog>
      )}
    </header>
  );
};

export default Header;
