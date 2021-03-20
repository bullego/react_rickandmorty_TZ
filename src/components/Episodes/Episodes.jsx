import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTable from '../../customHooks/useTable';
//thunk middleware
import { fetchEpisodesTC } from '../../redux/episodes-reducer';
//material-ui
import { TableBody, TableRow, TableCell } from '@material-ui/core';
//styles
import stl from './Episodes.module.css';

const headCells = [
	{id: 'name', label: 'Episode Name'},
	{id: 'air_date', label: 'Air Date', disableSorting: true},
]


const Episodes = () => {
	const dispatch = useDispatch();
	const records = useSelector(state => state.episodes.episodesData);

	useEffect(() => {
		dispatch(fetchEpisodesTC())
	}, [])

	const { TblContainer,
					TblHead,
					TblPagination,
					recordsAfterPagingAndSorting } = useTable(records, headCells);

	return (
		<div className={stl.episodes}>
			<h2>Episodes</h2>

			<div className={stl.episodes_table}>
				<TblContainer>
					<TblHead/>
					<TableBody>
						{
							recordsAfterPagingAndSorting().map(item => {
								return <TableRow key={item.id}>
												<TableCell>{item.name}</TableCell>
												<TableCell>{item.air_date}</TableCell>
											</TableRow>
							})
						}
					</TableBody>
				</TblContainer>

				<TblPagination/>
			</div>
		</div>
	);
};

export { Episodes };