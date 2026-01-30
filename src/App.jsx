import React, { useEffect } from "react";
import Header from "./components/Header";
import { fetchApiData } from "./store/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";

const App = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <Header />
      {/* <CreateForm /> */}
      <div className="grid grid-cols-4 gap-2 px-2">
        {users.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
