import axios from "axios";

export const ajax = {};

ajax.getWeatherSearch = (q = '') => {
  // q text koji trazimo
  const url = 'https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=' + q;
  const response = axios.get(url, {
    headers: {
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
      'X-RapidAPI-Key': '51955d2ad7mshc6d85919c22b857p11c3dbjsncb41963d7ec6'
    }
  });
  console.log('response za getWeatherSearch', response);
  return response;
};