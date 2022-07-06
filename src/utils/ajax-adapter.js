import axios from "axios";

export const ajax = {};

// ajax.getWeatherSearch1 = async (q = '') => {
//   // q text koji trazimo
//   const url = 'https://community-open-weather-map.p.rapidapi.com/weather?units=metric&q=' + q;
//   try {
//     const response = await axios.get(url, {
//       headers: {
//         'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
//         'X-RapidAPI-Key': '51955d2ad7mshc6d85919c22b857p11c3dbjsncb41963d7ec6'
//       }
//     });
//     console.log('response za getWeatherSearch', response);
//     if (response.data && response.data.id) {
//       console.log(response.data.id);
//       return response.data; // response data nam je cijela prognoza za taj grad
//     } else {
//       console.log('response ne uspijeva1');
//       return false;
//     }
//   } catch (err) {
//     console.log('response ne uspijeva1');
//     return false;
//   }
// };

ajax.getWeatherSearch = async (q = '') => {
  // q text koji trazimo
  const url = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=metric&cnt=6&q=' + q;
  try {
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '51955d2ad7mshc6d85919c22b857p11c3dbjsncb41963d7ec6'
      }
    });
    console.log('response za getWeatherSearch', response);
    if (response.data && response.data.city && response.data.city.id) {
      console.log(response.data.city.id);
      return response.data; // response data nam je cijela prognoza za taj grad
    } else {
      console.log('response ne uspijeva1');
      return false;
    }
  } catch (err) {
    console.log('response ne uspijeva1');
    return false;
  }
};

ajax.getWeatherByCityId = async (id = '') => {
  // q text koji trazimo
  const url = 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?units=metric&cnt=6&id=' + id;
  try {
    const response = await axios.get(url, {
      headers: {
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '51955d2ad7mshc6d85919c22b857p11c3dbjsncb41963d7ec6'
      }
    });
    console.log('response za getWeatherSearch', response);
    if (response.data && response.data.city && response.data.city.id) {
      console.log(response.data.city.id);
      return response.data; // response data nam je cijela prognoza za taj grad
    } else {
      console.log('response ne uspijeva1');
      return false;
    }
  } catch (err) {
    console.log('response ne uspijeva1');
    return false;
  }
};