import React, { useEffect, useState } from 'react';
//components
import { StateTextFields } from './components/Input';
import { Switches } from './components/CheckBox';
//material-ui
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
//styles
import stl from './WatchList.module.css';

function mockID() {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const WatchList = () => {
	const [watchList, setWatchList] = useState([
		{id: mockID(), episodeName: 'Pilot', isDone: false},
		{id: mockID(), episodeName: 'Lawnmower Dog', isDone: false},
		{id: mockID(), episodeName: 'Anatomy Park', isDone: false},
	]);

	const addNewEpisode = (episodeName) => {
		const newEpisode = {
			id: mockID(),
			episodeName,
			isDone: false
		}
		setWatchList(prevState => [...prevState, newEpisode]);	
	}

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('WatchList'));

		if(storage) {
			setWatchList(storage);
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('WatchList', JSON.stringify(watchList))
	}, [watchList]);

	const onToggleDone = (itemId) => {
		const updWatchList = watchList.map(episode => (episode.id === itemId) ? ({...episode, isDone: !episode.isDone}) : episode);

		setWatchList(updWatchList);
	}

	const onItemDeleted = (itemId) => {
		const index = watchList.findIndex(episode => episode.id === itemId);

		const updWatchList = [
			...watchList.slice(0, index),
			...watchList.slice(index+1),
		]
		setWatchList(updWatchList);
	}
	
	return (
		<div className={stl.watchlist}>
			<h2>My watch list</h2>
			<StateTextFields addNewEpisode={addNewEpisode}/>

			<ul className={stl.list_items}>
				{watchList && watchList.map(episode => {
					return (
						<li key={episode.id}
								className={stl.list_item}>		
							<div className={stl.item_done_wrap}>
								<Switches onToggleDone={onToggleDone}
													itemId={episode.id}
													isDone={episode.isDone}/>									
								
								<span className={episode.isDone ? stl.item_done : null}>
									{episode.episodeName}
								</span>
							</div>
							
							<button type="button"											
											onClick={() => onItemDeleted(episode.id)}
											className={stl.btn_delete}>
								<DeleteForeverIcon color='primary' fontSize='medium'/>
							</button>												
						</li>
					)
				})}
			</ul>
		</div>
	);
};

export { WatchList };


