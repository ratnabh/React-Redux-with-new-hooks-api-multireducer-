import axios from "axios";
import SpeechRecognition, {

} from "react-speech-recognition";
export const speechAction = (text) => async (dispatch) => {
  console.log(text);
  axios.get("https://606dc24c603ded00175048a3.mockapi.io/12").then((res) => {
    console.log(res);
    SpeechRecognition.startListening({continuous:true});
    dispatch({ type: "SET_DATA", payload: res.data[0].name });
  });
};
