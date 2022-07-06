import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";
import ForecastCard from "./ForecastCard";


const App = () => {

  const [result, setResult] = useState({});

  let resultReady = false;
  if (result && result.city && result.city.id) {
    resultReady = true;
  }

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
  }, [q])

  let jsxResult = (
    <div>No Results</div>
  );
  if (resultReady) {
    jsxResult = (
      <div>
        <div>ID: {result.city.id}</div>
        <div>Name: {result.city.name}</div>
        <div>icon: {result.list[0].weather[0].main}</div>
        <div>description: {result.list[0].weather[0].description}</div>
        <div>Temperature: {result.list[0].temp.day}</div>
        <div>Wind Speed: {result.list[0].speed}</div>
      </div>
    );
  }

  let jsxKartice = null;
  if (result.list && result.city) {
    jsxKartice = result.list.map((item, index) => {
      return (
        <ForecastCard key={index} city={result.city} item={item} />
      );
    });
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={formState.search}
        onChange={handleChange}
      />
      <h3>Forecast</h3>
      <div className="list">
        {jsxKartice}
      </div>
    </div>
  );
};

export default App;
