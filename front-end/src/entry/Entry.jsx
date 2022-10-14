import { useEffect } from 'react';                
import { useState } from 'react';
import './entry.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Entry () {

  const [text, setText] = useState("");
  
  // useEffect(() => {
  //   <script src="Speech.js"></script>
  // }, []);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Start: {listening ? 'on' : 'off'}</p>
      <button id="button" onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )}

