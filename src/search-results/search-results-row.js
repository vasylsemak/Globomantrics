const SearchResultsRow = ({ house }) => {
  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.price}</td>
    </tr>
  )
}

export default SearchResultsRow;