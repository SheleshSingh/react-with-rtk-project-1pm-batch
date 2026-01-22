import { UserPlus, X } from "lucide-react";

const CreateForm = () => {
  return (
    <div className="w-100 h-fit flex flex-col gap-3 p-5">
      <h1 className="text-center text-3xl font-semibold">Create user form </h1>
      <input
        type="text"
        placeholder="Name..."
        className="border-2 rounded outline-none px-3 py-2"
      />
      <input
        type="text"
        placeholder="Email..."
        className="border-2 rounded outline-none px-3 py-2"
      />
      <input
        type="text"
        placeholder="Image url..."
        className="border-2 rounded outline-none px-3 py-2"
      />
      <textarea
        rows={3}
        type="text"
        placeholder="Description..."
        className="border-2 border-dashed rounded outline-none px-3 py-2"
      />
      {/* <div className="flex justify-end gap-3">
        <div className="w-10 h-10 bg-black rounded-full  flex items-center justify-center text-white  cursor-pointer active:scale-80 transition duration-400">
          <X />
        </div>
        <button className="w-10 h-10 bg-black rounded-full  flex items-center justify-center text-white  cursor-pointer active:scale-80 transition duration-400">
          <UserPlus />
        </button>
      </div> */}
    </div>
  );
};

export default CreateForm;
