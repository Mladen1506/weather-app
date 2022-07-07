import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";
import ForecastCard from "./ForecastCard";
import ForecastToday from "./ForecastToday";
import PinnedPlace from "./PinnedPlace";
import Place from "./PinnedPlace";


const App = () => {

  const [pinned, setPinned] = useState([]);
  const [result, setResult] = useState({});

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
    // poziva se svaki put kad se search forma promijeni
    if (q !== '') {
      console.log('aktiviramo hot search za rijeci: ', q);
      ajax.getWeatherSearch(q)
        .then(obradjeni_response => {
          if (obradjeni_response) {
            // sigurno uspio response jer neuspjeli stize kao false
            console.log('response uspio:', obradjeni_response);
            setResult(obradjeni_response);
          }
        })
    }
  }, [q]);

  const _pinCity = (id) => {
    if (pinned.includes(id)) {
      // vec je pinovan ne treba ponovo
    } else {
      // setPinned([...pinned, id]);
      setPinned([id, ...pinned]);
    }
  };

  let jsxZeroResult = null;
  let jsxToday = null;
  let jsxKartice = null;
  if (result.list && result.city) {

    jsxToday = (
      <>
        <button type="button" onClick={(e) => { _pinCity(result.city.id) }}>PIN THIS CITY</button>
        <ForecastToday city={result.city} item={result.list[0]} />
      </>
    );
    jsxKartice = result.list.map((item, index) => {
      if (index === 0) {
        return null;
      }
      return (
        <ForecastCard key={index} city={result.city} item={item} />
      );
    });
  } else {
    jsxZeroResult = (
      <div>No Results</div>
    );
  }

  let jsxPinned = pinned.map((id) => {
    return (
      <PinnedPlace key={id} id={id} />
    );
  });


  return (
    <div>

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

      {jsxZeroResult}
      <div className="search-result">
        <h3>Today</h3>
        {jsxToday}
        <h3>5 Day Forecast</h3>
        <div className="list">
          {jsxKartice}
        </div>
      </div>
      <h2>Pinned Cities</h2>
      {jsxPinned}
    </div>
  );
};

export default App;
