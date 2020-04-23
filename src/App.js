import React from "react";
import { vehicleAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    console.log(state);
    return { data: state.fetch.data,item:state.fetch1.data };
  });

  const handlefetch = () => {
    dispatch(vehicleAction("123"));
  };

  return (
    <div className="App">
      <button onClick={handlefetch}>fetch</button>
      {counter.data.map((post) => (
        <p> {post.title}</p>
      ))}
    </div>
  );
}

export default App;
