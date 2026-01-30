import { useState } from "react";
import { useDispatch } from "react-redux";
import { userCreate } from "../../store/createAsyncThunk";

const CreateForm = ({ setOpen, formId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileUrl: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userCreate(formData));
    console.log(formData);
    setOpen(false);
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
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Email..."
        className="border-2 rounded outline-none px-3 py-2"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image url..."
        className="border-2 rounded outline-none px-3 py-2"
        name="profileUrl"
        value={formData.profileUrl}
        onChange={handleChange}
      />
      <textarea
        rows={3}
        type="text"
        placeholder="Description..."
        className="border-2 border-dashed rounded outline-none px-3 py-2"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </form>
  );
};

export default CreateForm;
