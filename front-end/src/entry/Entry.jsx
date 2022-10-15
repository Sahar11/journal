import { useEffect } from 'react';                
import { useState } from 'react';
import './entry.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import axios from 'axios';

const appId = 'c9822203-dbe0-4fe1-bcfa-d0e9f73314d9';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export default function Entry () {

  const [text, setText] = useState("");
  
  const listenContinously = () => {
   SpeechRecognition.startListening({
    continuous: true
   })
  }

  const Submit = () => {
    useEffect(() => {
      axios.post(`localhost:9000/entry/${transcript}`)
    })
  }


  const {
    transcript,
    listening,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
     
    }
    
    }, [interimTranscript, finalTranscript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
    
  }

  return (
    <div className="entry-block">
      <div>
      <p>Listening: {listening ? 'on' : 'off'}</p>
      {/* <button id="button" onClick={listenContinously}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      <button onTouchStart={listenContinously}
        onMouseDown={listenContinously}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening} 
        > Hold to talk </button>
      </div>
      <div className="entry-form">
      <form onSubmit={Submit}>
        <div>
      <textarea type="text" defaultValue={transcript} />
      </div>
      <button>Save</button>
      </form>
      </div>
    </div>
  )}

