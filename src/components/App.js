import { useState } from "react";
import PageFavourites from "./PageFavourites";
import PageFavouritesSlider from "./PageFavouritesSlider";
import PageSearchResult from "./PageSearchResult";


const App = () => {

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

  const _addToFavourites = (id) => {
    if (favourites.includes(id)) {
      // vec je pinovan ne treba ponovo
    } else {
      // setFavourites([...favourites, id]);
      setFavourites([id, ...favourites]);
    }
  };

  return (
    <div>
      <header>
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
      </header>
      <PageSearchResult q={q} addToFavourites={_addToFavourites} />
      <PageFavouritesSlider favourites={favourites} />
      <PageFavourites favourites={favourites} />
    </div>
  );
};

export default App;
