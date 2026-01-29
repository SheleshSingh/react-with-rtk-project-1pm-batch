import React, { useEffect } from "react";
import Header from "./components/Header";
import { fetchApiData } from "./store/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, []);
  return (
    <div>
      <Header />
      {/* <CreateForm /> */}
    </div>
  );
};

export default App;
