import { useMemo } from "react";

const useFeaturedHouse = (allHouses) => {
  const featuredHouse = useMemo(() => {
    if(allHouses.length) {
      let randomIdx = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIdx];
    }
  }, [allHouses]);
  return featuredHouse;
}

export default useFeaturedHouse;
