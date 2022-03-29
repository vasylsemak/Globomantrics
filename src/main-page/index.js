import './main-page.css';
import Header from './Header';
import { useEffect, useState } from 'react';

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

  return (
    <div className="container">
      <Header />
    </div>
  )
}

export default App;



/* {
  allHouses.map((house) => (
    <div key={house.id} className="row">
      <h1 className='col-md-5'>
        {house.price}
      </h1>
      <h2 className='col-md-5'>
        {house.country}
      </h2>
      <p className='col-md-5'>
        {house.address}
      </p>
      <img src={house.photo} alt="house"/>
    </div>
  ))
} */
