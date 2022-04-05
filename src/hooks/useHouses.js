import { useState, useEffect } from "react";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = (async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();
      setAllHouses(houses);
    })();
  }, [])

  return allHouses;
}

export default useHouses;