import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";


const App = () => {

  const [result, setResult] = useState({});

  let resultReady = false;
  if (result && result.id) {
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

  let jsxResult = (
    <div>No Results</div>
  );
  if (resultReady) {
    jsxResult = (
      <div>
        <div>ID: {result.id}</div>
        <div>Name: {result.name}</div>
        <div>icon: {result.weather[0].main}</div>
        <div>description: {result.weather[0].description}</div>
        <div>Temperature: {result.main.temp} degree</div>
        <div>Wind Speed: {result.wind.speed}</div>
      </div>
    );
  }

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


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={formState.search}
        onChange={handleChange}
      />
      <h3>Results</h3>
      {jsxResult}
    </div>
  );
};

export default App;
