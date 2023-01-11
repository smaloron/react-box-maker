import { useState } from 'react'
import './App.css'

import RandomUserForm from './components/RandomUserForm';
import RandomUserList from './components/RandomUserList';
import UseEffectFetch from './components/swapi-simple';
import SwapiList from './components/SwapiList';

function App () {
  const [search, setSearch] = useState({
    gender: 'female', nat: 'es', results: 5, key: 'femalees5'
  });

  function launchSearch (data) {
    setSearch(data);
  }

  return (
    <div className="App">
      <SwapiList />

      <RandomUserForm search={launchSearch} />

      <RandomUserList
        gender={search.gender} nat={search.nat} results={search.results} key={search.key}
      />


    </div>
  )
}

export default App
