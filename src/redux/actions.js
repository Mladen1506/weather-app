// ACTION TYPES CONSTANTS

export const ROUTE_SET = 'ROUTE_SET';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const FAVOURITE_INITIAL_LOAD = 'FAVOURITE_INITIAL_LOAD';

// ACTION CREATORS
export const actionRouteSet = (name) => {
  return {
    type: ROUTE_SET,
    payload: name
  };
};



export const actionAddToFavourites = (city) => {
  return {
    type: ADD_FAVOURITE,
    payload: city
  };
};

export const actionRemoveFavourites = (city) => {
  return {
    type: REMOVE_FAVOURITE,
    payload: city
  };
};