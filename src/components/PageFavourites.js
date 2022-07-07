import PinnedPlace from "./PinnedPlace";

const PageFavourites = (props) => {

  const favourites = props.favourites;

  let jsxFavourites = favourites.map((id) => {
    return (
      <PinnedPlace key={id} id={id} />
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