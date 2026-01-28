import React, { useEffect } from "react";
import Header from "./components/Header";
import { fetchApiData } from "./store/createAsyncThunk";
import { useDispatch } from "react-redux";

const App = () => {
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
