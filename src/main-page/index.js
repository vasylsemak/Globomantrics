import './main-page.css';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/house-from-query';
import FeaturedHouse from './featured-house';

function App() {
  const [allHouses, setAllHouses] = useState([]);
  const [firstCountry, setFirstCountry] = useState("");

  const fetchHouses = useCallback(async () => {
    const response = await fetch("/houses.json");
    const houses = await response.json();
    setAllHouses(houses); 
  }, [])

  useEffect(() => {
    fetchHouses();
  }, [fetchHouses]);

  // useEffect(() => {
  //   const fetchHouses = async () => {
  //     const response = await fetch("/houses.json");
  //     const houses = await response.json();
  //     setAllHouses(houses);
  //   }
  //   fetchHouses();
  // }, [])

  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      let randomIdx = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIdx];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header
          setFirstCountry={setFirstCountry}
        />
        <HouseFilter 
          houses={allHouses}
          firstCountry={firstCountry}
          setFirstCountry={setFirstCountry}
        />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults houses={allHouses} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery houses={allHouses} />
          </Route>
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
