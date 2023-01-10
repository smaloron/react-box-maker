import { useState } from 'react'
import './App.css'
import BoxForm from './components/BoxForm'
import BoxList from './components/BoxList';

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
      <BoxForm newBox={addBox} />
      <BoxList boxes={boxes} delete={removeBox} />
    </div>
  )
}

export default App
