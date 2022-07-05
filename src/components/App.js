import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";


const App = () => {
  
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

  useEffect(() => {
    // poziva se svaki put kad se search forma promijeni
    const q = formState.search;
    console.log('aktiviramo hot search za rijeci: ', q);
    ajax.getWeatherSearch(q);
  }, [formState])


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={formState.search}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
