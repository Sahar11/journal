import { useEffect } from 'react';                
import { useState } from 'react';
import './entry.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Entry () {

  const [text, setText] = useState("");
  
  const listenContinously = () => {
   SpeechRecognition.startListening({
    continuous: true
   })
  }

  const Submit = () => {
    useEffect(() => {
      //axios
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
      <button id="button" onClick={listenContinously}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
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

