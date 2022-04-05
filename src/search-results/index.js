import "./search-results.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";
import HouseContext from "../context/house-context";

const SearchResults = () => {
  const houses = useContext(HouseContext);
  const { country } = useParams();
  
  const countryHouses = houses 
    ? houses.filter(h => h.country === country)
    : null;

  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {countryHouses.map(h => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default SearchResults;