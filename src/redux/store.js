import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import charactersReducer from './characters-reducer';
import episodesReducer from './episodes-reducer';
import locationsReducer from './locations-reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
	characters: charactersReducer,
	episodes: episodesReducer,
	locations: locationsReducer
})

//Chrome-extension (REDUX)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export default store;