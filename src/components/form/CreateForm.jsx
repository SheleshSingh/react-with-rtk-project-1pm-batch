import { useState } from "react";

const CreateForm = ({ setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileUrl: "",
    description: "",
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpen(false);
    console.log("hello");
  };
  return (
    <form
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
      <div className="flex justify-end gap-5">
        <button className="bg-black text-white px-5 py-2 rounded active:scale-80 transition duration-400">
          Cancel
        </button>
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded active:scale-80 transition duration-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
