import { createContext, useReducer } from 'react';

const initialState = {
  episodes: [],
  favourites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FAV':
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
}

export const Context = createContext();

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default ContextProvider;
