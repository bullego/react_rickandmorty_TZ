import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTable from '../../customHooks/useTable';
//thunk middleware
import { fetchLocationsTC } from '../../redux/locations-reducer';
//material-ui
import { TableBody, TableRow, TableCell } from '@material-ui/core';
//styles
import stl from './Locations.module.css';

const headCells = [
	{id: 'name', label: 'Location Name'},
	{id: 'type', label: 'Type'},
	{id: 'dimension', label: 'Dimension'},
]


const Locations = () => {
	const dispatch = useDispatch();
	const records = useSelector(state => state.locations.locationsData);

	useEffect(() => {
		dispatch(fetchLocationsTC())
	}, [])

	const { TblContainer,
					TblHead,
					TblPagination,
					recordsAfterPagingAndSorting } = useTable(records, headCells);

	return (
		<div className={stl.locations}>
			<h2>Locations</h2>

			<div className={stl.locations_table}>
				<TblContainer>
					<TblHead/>
					<TableBody>
						{
							recordsAfterPagingAndSorting().map(item => {
								return <TableRow key={item.id}>
												<TableCell>{item.name}</TableCell>
												<TableCell>{item.type}</TableCell>
												<TableCell>{item.dimension}</TableCell>
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

export { Locations };