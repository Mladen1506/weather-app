import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";
import ForecastCard from "./ForecastCard";
import ForecastToday from "./ForecastToday";
import PageFavourites from "./PageFavourites";
import PageSearchResult from "./PageSearchResult";


const App = () => {

  const [pinned, setPinned] = useState([]);

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

  const _pinCity = (id) => {
    if (pinned.includes(id)) {
      // vec je pinovan ne treba ponovo
    } else {
      // setPinned([...pinned, id]);
      setPinned([id, ...pinned]);
    }
  };

  return (
    <div>
      <header>
        <button type="button" onClick={(e) => { _pinCity(2643743) }}>London</button>
        <button type="button" onClick={(e) => { _pinCity(2988507) }}>Paris</button>
        <button type="button" onClick={(e) => { _pinCity(4219762) }}>Rome</button>
        <button type="button" onClick={(e) => { _pinCity(4164138) }}>Miami</button>

        <input
          type="text"
          placeholder="Search"
          name="search"
          value={formState.search}
          onChange={handleChange}
        />
      </header>
      <PageSearchResult q={q} _pinCity={_pinCity} />
      <PageFavourites favourites={pinned} />
    </div>
  );
};

export default App;
