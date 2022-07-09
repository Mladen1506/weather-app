import City from "./City";

const PageFavourites = (props) => {

  const favourites = props.favourites;

  let jsxFavourites = favourites.map((id) => {
    return (
      <City key={id} id={id} />
    );
  });

  return (
    <div className="page-favourites">
      <h2>Favourite Cities</h2>
      {jsxFavourites}
    </div>
  );
};

export default PageFavourites;