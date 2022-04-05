import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import House from './index';
import HouseContext from '../context/house-context';

const HouseFromQuery = () => {
  const houses = useContext(HouseContext);
  const { id } = useParams();
  const houseById = houses.find(h => h.id === parseInt(id))

  return !houseById
    ? <h2>No house found</h2>
    : <House house={houseById} />
};

export default HouseFromQuery;
