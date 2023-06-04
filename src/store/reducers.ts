interface State {
  movies: any[];
}

const initialState: State = {
  movies: []
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default reducer;