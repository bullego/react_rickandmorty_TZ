import React, { useState } from 'react';
import { makeStyles,
				 Table,
				 TableHead,
				 TableRow,
				 TableCell,
				 TablePagination, 
				 TableSortLabel} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	table: {
		// marginTop: theme.spacing(3),
		'& thead th': {
			fontWeight: '600',
			color: theme.palette.primary.main,
			// backgroundColor: theme.palette.primary.light
		},
		'& tbody td': {
			fontWeight: '300',
		},
		'& tbody td:hover': {
			color: '#fffbf2',
		},
		'& tbody tr:hover': {
			backgroundColor: theme.palette.primary.light,
			cursor: 'pointer',
		},
	}
}))


export default function useTable(records, headCells) {
	const classes = useStyles();
	const pages = [5, 10, 25];
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(25);
	const [order, setOrder] = useState();
	const [orderBy, setOrderBy] = useState();

	const TblContainer = props => (
		<Table className={classes.table}>
			{props.children}
		</Table>
	)

	const TblHead = props => {
		const handleSortRequest = (cellId) => {
			const isASC = orderBy === cellId && order === 'asc';
			setOrder(isASC ? 'desc' : 'asc');
			setOrderBy(cellId);
		}

		return (
			<TableHead>
				<TableRow>
					{
						headCells.map(headCell => {
							return <TableCell key={headCell.id}
																sortDirection={orderBy === headCell.id ? order : false}>
								{ headCell.disableSorting
									? 
										headCell.label
									:
										<TableSortLabel onClick={() => handleSortRequest(headCell.id)}
																		active={orderBy === headCell.id}
																		direction={orderBy === headCell.id ? order: 'asc'}>
											{headCell.label}
										</TableSortLabel>
								}
							</TableCell>
						})
					}
				</TableRow>
			</TableHead>
		)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	}
	
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	}

	function stableSort(arr, comparator) {
		const stabilizedThis = arr.map((el, index) => [el, index]);

		stabilizedThis.sort((a, b) => {
			const order = comparator(a[0], b[0]);
			if(order !== 0) return order;
			return a[1] - b[1];
		})

		return stabilizedThis.map(el => el[0]);
	}
	
	function getCompare(order, orderBy) {
		return order === 'desc'
			? (a, b) => descendingCompare(a, b, orderBy)
			: (a, b) => -descendingCompare(a, b, orderBy)
	}

	function descendingCompare(a, b, orderBy) {
		if(b[orderBy] < a[orderBy]) {
			return -1;
		}
		if(b[orderBy] > a[orderBy]) {
			return 1;
		}
		return 0;
	}

	const recordsAfterPagingAndSorting = () => {
		return stableSort(records, getCompare(order, orderBy))
						.slice(page*rowsPerPage, (page+1)*rowsPerPage)
	}

	const TblPagination = () => {
		return <TablePagination component='div'
														page={page}
														rowsPerPage={rowsPerPage}
														rowsPerPageOptions={pages}
														count={records.length}
														onChangePage={handleChangePage}
														onChangeRowsPerPage={handleChangeRowsPerPage}/>
	}

	return {
		TblContainer,
		TblHead,
		TblPagination,
		recordsAfterPagingAndSorting
	}
};