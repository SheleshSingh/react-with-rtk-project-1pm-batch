import { Heart, SquarePen, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userDelete, userEdit } from "../store/createAsyncThunk";
import Dialog from "./Dialog";
import EditUserForm from "./form/EditUserForm";

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="border-2 border-amber-500 flex flex-col gap-2 rounded overflow-hidden p-2">
      <div className="w-full h-50">
        <img
          src={
            data?.profileUrl ||
            "https://images.unsplash.com/photo-1769488718464-882e6c1adfd9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={data?.profileUrl}
          className="w-full h-full rounded border-2 border-black"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1>{data?.name}</h1>
          <h3>{data?.email}</h3>
        </div>
        <div className="w-10 h-10 p-2 bg-black rounded-full  flex items-center justify-center text-white  cursor-pointer active:scale-80 transition duration-400">
          <Heart />
        </div>
      </div>
      <p>{data?.description}</p>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => {
            (setOpen(true), dispatch(userEdit(data?.id)));
          }}
          className="bg-black p-3 text-white rounded-full active:scale-85 duration-300"
        >
          <SquarePen />
        </button>
        <button
          onClick={() => dispatch(userDelete(data?.id))}
          className="bg-black p-3 text-white rounded-full active:scale-85 duration-300"
        >
          <Trash2 />
        </button>
      </div>
      {open && (
        <Dialog
          message={"Edit User Form"}
          setOpen={setOpen}
          formId={"editUser"}
        >
          <EditUserForm formId={"editUser"} />
        </Dialog>
      )}
    </div>
  );
};

export default Card;
