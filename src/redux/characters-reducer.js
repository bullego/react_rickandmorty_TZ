import { fetchCharacters,
				 fetchFilteredCharacters,
				 fetchNextCharacters } from '../api/api';

const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS';
const FETCH_PAGINATION_INFO = 'characters/FETCH_PAGINATION_INFO';

const initialState = {
	charactersData: [],
	paginationInfo: {},
}

//reducer
const charactersReducer = (state = initialState, action) => {
	switch(action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
				charactersData: [...action.characters]
      }
    case FETCH_PAGINATION_INFO:
      return {
        ...state,
				paginationInfo: {...action.paginationInfo}
      }
    default:
			return state;
  }
}
export default charactersReducer;



//Action Creator
export const setCharactersAC = (characters) => {
  return {
    type: FETCH_CHARACTERS,
		characters
  }
}

export const setPaginationInfoAC = (paginationInfo) => {
  return {
    type: FETCH_PAGINATION_INFO,
		paginationInfo
  }
}

//Thunk Creator
export const fetchCharactersTC = () => async (dispatch) => {
  try {
		const res = await fetchCharacters();
		const characters = res.results;
		const paginationInfo = res.info;

		dispatch(setCharactersAC(characters));
		dispatch(setPaginationInfoAC(paginationInfo));
	}
	catch(error) {
    alert(`Get characters ${error}`)
  }
};

export const fetchFilteredCharactersTC = (filter) => async (dispatch) => {
  try {
		const res = await fetchFilteredCharacters(filter);
		const filteredCharacters = res.results;
		const paginationInfo = res.info;

		dispatch(setCharactersAC(filteredCharacters))
		dispatch(setPaginationInfoAC(paginationInfo));
	}
	catch(error) {
    alert(`Get filtered characters ${error}`)
  }
};

export const fetchNextCharactersTC = (nextPageUrl) => async (dispatch) => {
  try {
		const res = await fetchNextCharacters(nextPageUrl);
		const nextCharacters = res.results;
		const paginationInfo = res.info;
		
		dispatch(setCharactersAC(nextCharacters));
		dispatch(setPaginationInfoAC(paginationInfo));
	}
	catch(error) {
    alert(`Get characters ${error}`)
  }
};