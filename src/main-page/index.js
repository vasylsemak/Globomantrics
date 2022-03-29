import './main-page.css';
import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header';
import FeaturedHouse from './featured-house';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();
      setAllHouses(houses)
    }
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      let randomIdx = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIdx];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
