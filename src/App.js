import React, { useEffect } from "react";
import { speechAction } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const {
    transcript,
    resetTranscript,
    finalTranscript,
  } = useSpeechRecognition();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.fetch.name);

  useEffect(() => {
    if (finalTranscript.length > 0) {
      SpeechRecognition.abortListening();
      // setTimeout(() => {
      console.log(transcript);
      dispatch(speechAction(transcript));
      resetTranscript();
      // }, 2000);
      // dispatch(userResponseChat(finalTranscript));
    }
  }, [finalTranscript]);

  const handleSpeak = () => {
    SpeechRecognition.startListening();
  };

  return (
    <div className="App">
      <button onClick={() => handleSpeak()}>Tap to speak</button>

      <h1>{userName}</h1>
    </div>
  );
}

export default App;
