import House from "../house";

const FeaturedHouse = ({ house }) => (
  house ? (
    <>
      <div className="row featuredHouse">
        <h3 className="col-md-12 text-center">Featured house</h3>
      </div>
      <House house={house} />
    </>
  ) : (
    <div>No featured house at this time</div>
  )
);

export default FeaturedHouse;