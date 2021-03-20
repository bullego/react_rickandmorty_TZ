import { fetchEpisodes } from '../api/api';

const FETCH_EPISODES = 'episodes/FETCH_EPISODES';

const initialState = {
	episodesData: [],
}

//reducer
const episodesReducer = (state = initialState, action) => {
	switch(action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
				episodesData: [...action.episodes]
      }
    default:
			return state;
  }
}
export default episodesReducer;



//Action Creator
export const setEpisodesAC = (episodes) => {
  return {
    type: FETCH_EPISODES,
		episodes
  }
}

//Thunk Creator
export const fetchEpisodesTC = () => async (dispatch) => {
  try {
		const res = await fetchEpisodes();
		const episodes = res;
		const paginationInfo = res.info;
		console.log('fetch episodes: ', episodes);
		
		dispatch(setEpisodesAC(episodes));
	}
	catch(error) {
    alert(`Get episodes ${error}`)
  }
};