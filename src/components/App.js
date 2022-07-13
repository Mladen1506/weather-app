import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionRouteSet } from "../redux/actions";
import PageRouter from "./PageRouter";


const App = () => {

  const dispatch = useDispatch();

  const [favourites, setFavourites] = useState([]);

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
    if(q !== '') {
      dispatch(actionRouteSet('SEARCH'));
    }
  }, [q]);

  const _addToFavourites = (id) => {
    if (favourites.includes(id)) {
      // vec je pinovan ne treba ponovo
    } else {
      // setFavourites([...favourites, id]);
      setFavourites([id, ...favourites]);
    }
  };

  const handleClickHome = (e) => {
    dispatch(actionRouteSet('HOME'));
  };

  const handleClickSearch = (e) => {
    dispatch(actionRouteSet('SEARCH'));
  };


  return (
    <div>
      <header>
        <button type="button" onClick={handleClickHome}>HOME</button>
        <button type="button" onClick={(e) => { _addToFavourites(2643743) }}>London</button>
        <button type="button" onClick={(e) => { _addToFavourites(2988507) }}>Paris</button>
        <button type="button" onClick={(e) => { _addToFavourites(4219762) }}>Rome</button>
        <button type="button" onClick={(e) => { _addToFavourites(4164138) }}>Miami</button>

        <input
          type="text"
          placeholder="Search"
          name="search"
          value={formState.search}
          onChange={handleChange}
        />
        <button type="button" onClick={handleClickSearch}>SEARCH</button>
      </header>
      <PageRouter favourites={favourites } q={q}/>
    </div>
  );
};

export default App;
