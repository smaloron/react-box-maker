import { useState } from 'react'
import './App.css'
import BoxForm from './components/BoxForm'
import BoxList from './components/BoxList';
import RandomUserList from './components/RandomUserList';
import UseEffectFetch from './components/swapi-simple';
import SwapiList from './components/SwapiList';
import UseEffectBasic from './components/UseEffectBasic';
import UseEffectStorage from './components/UseEffectStorage';

function App () {
  const [boxes, setBoxes] = useState([]);


  function addBox (boxData) {
    setBoxes([...boxes, boxData]);
    console.log(boxes);
  }

  function removeBox (index) {
    const newState = [...boxes];
    newState.splice(index, 1);
    setBoxes(newState);
  }

  return (
    <div className="App">
      <SwapiList />

      <RandomUserList
        gender="female" nat="fr" results="10"
      />


    </div>
  )
}

export default App
