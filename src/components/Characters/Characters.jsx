import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//thunk middleware
import { fetchCharactersTC,
				 fetchFilteredCharactersTC } from '../../redux/characters-reducer';
//components
import { Filter } from './components/Filter';
import { MediaCard } from './components/Card';
import { TransitionsModal } from './components/Modal';
import { PaginationControlled } from './components/Pagination';
//styles
import stl from './Characters.module.css';

const Characters = () => {
	const [filters, setFilters] = useState([
		{
			name: 'species',
			options: ['human', 'alien'],
			currentOption: ''
		},
		{
			name: 'status',
			options: ['alive', 'dead', 'unknown'],
			currentOption: ''
		},
		{
			name: 'gender',
			options: ['female', 'male', 'genderless', 'unknown'],
			currentOption: ''
		}
	]);

	const dispatch = useDispatch();
	const characters = useSelector(state => state.characters.charactersData);
	const {count: cardsCount,
				 pages: pagesCount,
				 next: nextPage,
				 prev: prevPage} = useSelector(state => state.characters.paginationInfo);


	useEffect(() => {
		dispatch(fetchCharactersTC())
	}, [])

	const handlerFilter = (filterName, newFilterOption) => {
		const newFilters = filters.map(f => (f.name === filterName)
			 ? {...f, currentOption: newFilterOption}
			 : f
		);
		setFilters(newFilters);
		
		//queryParams: ${filterName}=${filterOption}&${filterName}=${filterOption}...
		const queryParams = newFilters.filter(f => !!f.currentOption)
																	.map(f => f.name + '=' + f.currentOption)
																	.join('&');
		dispatch(fetchFilteredCharactersTC(queryParams));
	}
	

	return (
		<div className={stl.characters}>
			<h2 className={stl.characters_title}>Characters</h2>

			<div className={stl.filters_wrap}>
				{filters.map(f => {
					return <Filter filterOptions={f.options}
												 filterName={f.name}
												 currentOption={f.currentOption}
												 handlerFilter={handlerFilter}/>
					})
				}
			</div>
			
			<ul className={stl.cards_list}>
			{ characters.map((card) => {
				return (
					<li key={card.id}
							className={stl.card}>
						<TransitionsModal card={card}>
							<MediaCard title={card.name}
												 image={card.image}
												 status={card.status}
												 species={card.species}
												 gender={card.gender}/>
						</TransitionsModal>
					</li>
				)
			})}
			</ul>

			<PaginationControlled itemsCount={cardsCount}
														pagesCount={pagesCount}
														nextPage={nextPage}
														prevPage={prevPage}/>
		</div>
	);
};

export { Characters }