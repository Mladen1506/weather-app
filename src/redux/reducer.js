import { ADD_FAVOURITE, ROUTE_SET } from "./actions";

const initialState = {
  route: 'HOME',
  favourites: []
};

const rootReducer = (state = initialState, action) => {
  let city;
  switch (action.type) {
    case ROUTE_SET:
      return {
        ...state,
        route: action.payload
      };
    case ADD_FAVOURITE:
      city = action.payload;
      if (state.favourites.includes(city)) {
        return state;
      } else {
        return {
          ...state,
          favourites: [...state.favourites, city]
        };
      }


    case 'NEKI_ACTION ':

      break;

    default:
      return state;
  }

};


export default rootReducer;