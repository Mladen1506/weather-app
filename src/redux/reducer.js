import { FlareSharp } from "@mui/icons-material";
import { ADD_FAVOURITE, FAVOURITE_INITIAL_LOAD, REMOVE_FAVOURITE, ROUTE_SET } from "./actions";

const initialState = {
  initialized: false,
  route: 'HOME',
  freshness: 0,
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

    case REMOVE_FAVOURITE:
      city = action.payload;
      const favouritesNakonBrisanja = state.favourites.filter((id)=>{
        if (id === city) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        favourites:favouritesNakonBrisanja
      };

      case FAVOURITE_INITIAL_LOAD:
        return {
          ...state,
          favourites: action.payload,
          initialized: true
        }


    case 'NEKI_ACTION ':

      break;

    default:
      return state;
  }

};


export default rootReducer;