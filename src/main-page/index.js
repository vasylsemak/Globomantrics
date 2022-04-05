import './main-page.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import HouseFilter from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/house-from-query';
import FeaturedHouse from './featured-house';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HouseContext from '../context/house-context';

function App() {
  const [firstCountry, setFirstCountry] = useState("");
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
        <div className="container">
          <Header setFirstCountry={setFirstCountry} />
          <HouseFilter 
            firstCountry={firstCountry}
            setFirstCountry={setFirstCountry}
          />
          <Switch>
            <Route path="/searchresults/:country">
              <SearchResults />
            </Route>
            <Route path="/house/:id">
              <HouseFromQuery />
            </Route>
            <Route exact path="/">
              <FeaturedHouse house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HouseContext.Provider>
    </Router>
  )
}

export default App;
