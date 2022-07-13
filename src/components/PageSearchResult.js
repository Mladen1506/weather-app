import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionAddToFavourites } from "../redux/actions";
import { ajax } from "../utils/ajax-adapter";
import ForecastCard from "./ForecastCard";
import ForecastToday from "./ForecastToday";


const PageSearchResult = (props) => {
  
  const dispatch = useDispatch();
  const q = props.q;


  const [result, setResult] = useState({});

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

  // const addToFavourites = props.addToFavourites;
  const _addToFavourites = (id) => {
    dispatch(actionAddToFavourites(id));
  };

  let jsxZeroResult = null;
  let jsxToday = null;
  let jsxKartice = null;
  if (result.list && result.city) {

    jsxToday = (
      <>
        <button type="button" onClick={(e) => { _addToFavourites(result.city.id) }}>PIN THIS CITY</button>
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
      <div>No Result</div>
    );
  }
  return (
    <div className="page-search">
      <h2>Search Results</h2>

      {jsxZeroResult}
      <div className="search-result">
        <h3>Today</h3>
        {jsxToday}
        <h3>5 Day Forecast</h3>
        <div className="list">
          {jsxKartice}
        </div>
      </div>
    </div>
  );
};

export default PageSearchResult;
