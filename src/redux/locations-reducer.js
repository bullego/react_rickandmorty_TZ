import { fetchLocations } from '../api/api';

const FETCH_LOCATIONS = 'locations/FETCH_LOCATIONS';

const initialState = {
	locationsData: []
}
//reducer
const locationsReducer = (state = initialState, action) => {
	switch(action.type) {
    case FETCH_LOCATIONS:
      return {
        ...state,
				locationsData: [...action.locations]
      }
    default:
			return state;
  }
}
export default locationsReducer;


//Action Creator
export const setLocationsAC = (locations) => {
  return {
    type: FETCH_LOCATIONS,
		locations
  }
}

//Thunk Creator
export const fetchLocationsTC = () => async (dispatch) => {
  try {
		const locations = await fetchLocations();
		console.log('fetch locations: ', locations);
		
		dispatch(setLocationsAC(locations));
	}
	catch(error) {
    alert(`Get locations ${error}`)
  }
};