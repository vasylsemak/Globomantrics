const SearchResultsRow = ({ house }) => {
  console.log("house ", house)

  return (
    <tr>
      <td>{house.address}</td>
      <td>{house.price}</td>
    </tr>
  )
}

export default SearchResultsRow;