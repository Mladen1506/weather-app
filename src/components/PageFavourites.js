import { useDispatch, useSelector } from "react-redux";
import { actionRemoveFavourites } from "../redux/actions";
import City from "./City";

const PageFavourites = (props) => {

  const dispatch = useDispatch();
  // const favourites = props.favourites;
  const favourites = useSelector(state => state.favourites);

  const _handleRemove = (id) => {
    dispatch(actionRemoveFavourites(id));
  };

  let jsxFavourites = favourites.map((id) => {
    return (
      <>
        <button type="button" onClick={(e)=> {_handleRemove(id)}}>Remove</button>
        <City key={id} id={id} />
      </>
    );
  });

  return (
    <div className="page page-favourites">
      <h2>Favourite Cities</h2>
      {jsxFavourites}
    </div>
  );
};

export default PageFavourites;