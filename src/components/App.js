import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionAddToFavourites, actionRouteSet, FAVOURITE_INITIAL_LOAD } from "../redux/actions";
import { readStoredFavourites, storeFavourites } from "../utils/favourites-storage-utils";
import BtnIcon from './BtnIcon';
import PageRouter from "./PageRouter";



const App = () => {

  const dispatch = useDispatch();
  const favourites = useSelector(state=> state.favourites);
  const initialized = useSelector(state=> state.initialized);

  useEffect(()=>{
    const storedFavourites = readStoredFavourites();
    dispatch({
      type: FAVOURITE_INITIAL_LOAD,
      payload: storedFavourites
    })
  }, []);

  useEffect(()=>{
    if (initialized){
      storeFavourites(favourites);
    }
  }, [favourites, initialized]);


  const preset = {
    search: ''
  };

  const [formState, setFormState] = useState(preset);


  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const q = formState.search.trim();

  useEffect(() => {
    if (q !== '') {
      dispatch(actionRouteSet('SEARCH'));
    }
  }, [q]);

  
  const _addToFavourites = (id) => {
   dispatch(actionAddToFavourites(id));
  };
  

  const handleClickHome = (e) => {
    dispatch(actionRouteSet('HOME'));
  };

  const handleClickFavourites = (e) => {
    dispatch(actionRouteSet('FAVOURITES'));
  };

  const handleClickSearch = (e) => {
    dispatch(actionRouteSet('SEARCH'));
  };


  return (
    <div>
      <header>
        <BtnIcon fa="fa fa-home" title="Home" handleClick={handleClickHome} />
        <BtnIcon fa="fa fa-star-o" title="Favourites" handleClick={handleClickFavourites} />
        <div className="search-field">
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={formState.search}
            onChange={handleChange}
          />
        </div>
        <BtnIcon fa="fa fa-search" title="Search" handleClick={handleClickSearch} />
      </header>
      <PageRouter q={q} />
    </div>
  );
};

export default App;
