import "./search-results.css";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";

const SearchResults = ({ houses }) => {
  const { country } = useParams();
  const countryHouses = houses.filter(h => h.country === country);

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