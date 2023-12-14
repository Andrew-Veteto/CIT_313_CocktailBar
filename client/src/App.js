import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CocktailsList from './components/CocktailsList/CocktailsList'
import CocktailDetailPage from './components/CocktailDeatilPage/CocktailDetailPage'
import { nanoid } from "nanoid";
import axios from 'axios'
import "./App.css"

function App() {
  const [cocktails, setCocktails] = useState([])
  useEffect(() => {
    const loadCocktails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/cocktails`)
        console.log(response.data)
        setCocktails(() => [...response.data])
      }

      catch (error) {
        console.log('Error!')

      }

    }
    loadCocktails();
  }, []);

  const cocktailsList = cocktails.map((cocktail) => <CocktailsList
    key={nanoid()}
    cocktailName={cocktail.name}

  />)


  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <header className="App-header">
          </header>
          <div id="main" className="viewList">
            {cocktailsList}
          </div>
        </div>} />
        <Route path="/detail/:name" element={<CocktailDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;