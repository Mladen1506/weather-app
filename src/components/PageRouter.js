import { useSelector } from "react-redux";
import PageFavourites from "./PageFavourites";
import PageFavouritesSlider from "./PageFavouritesSlider";
import PageSearchResult from "./PageSearchResult";

const PageRouter = (props) => {

  const route = useSelector(state => state.route);

  let jsxRoute = null;

  if (route === 'HOME') {
    jsxRoute = (
      <PageFavouritesSlider favourites={props.favourites }/>
    );
  } else if (route === 'FAVOURITES') {
    jsxRoute = (
      <PageFavourites favourites={props.favourites} />
    );
  } else if (route === 'SEARCH') {
    jsxRoute = (
      <PageSearchResult q={props.q} _addToFavourites={props._addToFavourites} />
    );
  } else {
    jsxRoute = (
      <div>Page Not Found</div>
    );
    }


  return (
    <>
      {jsxRoute}
    </>
  );
};

export default PageRouter;