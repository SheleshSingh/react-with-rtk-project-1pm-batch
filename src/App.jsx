import React, { useEffect } from "react";
import Header from "./components/Header";
import { fetchApiData } from "./store/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/Card";
import { Loader } from "lucide-react";

const App = () => {
  const { users, loading } = useSelector((state) => state.user);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiData());
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <Header />
      {/* <CreateForm /> */}

      {loading ? (
        <div className="flex justify-center">
          <h1 className="animate-spin text-amber-400">
            <Loader size={80} />
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 px-2">
          {users.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
