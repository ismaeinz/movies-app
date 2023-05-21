const { createContext, useContext, useReducer } = require("react");

const initialState = {
  watchList: [],
  watched: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "AddToWatchList":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "RemoveFromWatchList":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "MoveToWatchList":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.imdbId
        ),
        watchList: [action.payload, ...state.watchList],
      };
    // Watched

    case "AddToWatched":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
        watched: [action.payload, ...state.watched],
      };

    case "RemoveFromWatched":
      return {
        ...state,
        watched: state.watchList.filter(
          (movie) => movie.imdbId !== action.payload.imdbId
        ),
      };

    default:
      return state;
  }
};
export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        watched: state.watched,
        watchList: state.watchList,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

export const UseMovies = () => {
  return useContext(GlobalContext);
};
