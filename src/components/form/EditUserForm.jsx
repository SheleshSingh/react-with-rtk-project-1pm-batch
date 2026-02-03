import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userEdit } from "../../store/createAsyncThunk";

const EditUserForm = ({ formId, data, setOpen }) => {
  const [editUserData, setEditUserData] = useState({
    name: data?.name,
    email: data?.email,
    profileUrl: data?.profileUrl,
    description: data?.description,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data?.id) {
      dispatch(userEdit({ id: data?.id, details: editUserData }));
    }
    setOpen(false);
    console.log(editUserData);
  };
  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="w-100 h-fit flex flex-col gap-3 p-5"
    >
      <input
        type="text"
        placeholder="Name..."
        className="border-2 rounded outline-none px-3 py-2"
        name="name"
        value={editUserData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email..."
        className="border-2 rounded outline-none px-3 py-2"
        name="email"
        value={editUserData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image url..."
        className="border-2 rounded outline-none px-3 py-2"
        name="profileUrl"
        value={editUserData.profileUrl}
        onChange={handleChange}
      />
      <textarea
        rows={3}
        type="text"
        placeholder="Description..."
        className="border-2 border-dashed rounded outline-none px-3 py-2"
        name="description"
        value={editUserData.description}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditUserForm;
