import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
export const vehicleAction = (text) => async (dispatch) => {
  console.log(text);
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res);
    dispatch({
      type: "fetch",
      data: res.data,
    });
  });
};
