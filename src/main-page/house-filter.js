import { useHistory } from 'react-router-dom';

const HouseFilter = ({ houses }) => {
  const history = useHistory();

  const countries = houses
    ? Array.from(new Set(houses.map(h => h.country)))
    : [];
  countries.unshift(null);

  const setSearchChange = (e) => {
    let country = e.target.value;
    if(country) history.push(`/searchresults/${country}`);
  }

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={setSearchChange}>
          {countries.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;