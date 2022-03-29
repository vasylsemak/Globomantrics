const FeaturedHouse = ({ house }) => (
    house ? (
        <h1>House</h1>
    ) : (
        <h4>No featured houses at his time</h4>
    )
);

export default FeaturedHouse;