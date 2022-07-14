const LOCAL_STORAGE_FAVOURITES_KEY = 'weather_app_favourites';

export const storeFavourites = (favourites)=>{
  let json = '';
  try {
    json = JSON.stringify(favourites);
  } catch (err) {

  }
  window.localStorage.setItem(LOCAL_STORAGE_FAVOURITES_KEY, json);
};

export const readStoredFavourites = ()=> {
  let favourites = [];
  try {
    const json = window.localStorage.getItem(LOCAL_STORAGE_FAVOURITES_KEY);
    const _favourites = JSON.parse(json);
    if (Array.isArray(_favourites)){
      favourites = _favourites;
    }
  } catch (err) {

  }
  return favourites;
};