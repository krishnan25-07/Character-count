import { useState } from 'react';
import TextInput from './components/TextInput';
import CharacterStats from './components/CharacterStats';
import './App.css';

function App () {
  const [text , setText] = useState("");

  return (
    <div className='app-container'>
      <h1>Live Character Counter</h1>
      <TextInput text={text} setText={setText} />
      <CharacterStats text={text} />
    </div>
  );
}

export default App;