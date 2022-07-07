import { useEffect, useState } from "react";
import { ajax } from "../utils/ajax-adapter";
import ForecastCard from "./ForecastCard";
import ForecastToday from "./ForecastToday";

const PinnedPlace = (props) => {
  const id = props.id;
  const [result, setResult] = useState({});

  useEffect(() => {
    console.log('aktiviramo hot search za rijeci: ', id);
    ajax.getWeatherByCityId(id)
      .then(obradjeni_response => {
        if (obradjeni_response) {
          // sigurno uspio response jer neuspjeli stize kao false
          console.log('response uspio:', obradjeni_response);
          setResult(obradjeni_response);
        }
      })
  }, [id]);

  let jsxZeroResult = null;
  let jsxToday = null;
  let jsxKartice = null;
  if (result.list && result.city) {

    jsxToday = (
      <>
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

  

  return (
    <div className="pinned-place">PINNED CITIES ID: {id}

      <h3>Today</h3>
      {jsxToday}
      <h3>5 Day Forecast</h3>
      <div className="list">
        {jsxKartice}
      </div>
    </div>
  );
};

export default PinnedPlace;