import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//thunk middleware
import { fetchNextCharactersTC } from '../../../../redux/characters-reducer';
//material-ui
import Pagination from '@material-ui/lab/Pagination';
//styles
import stl from './Pagination.module.css';


const PaginationControlled = ({pagesCount, nextPage, prevPage}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event, newPageNumber) => {
    if(newPageNumber > pageNumber) {
      dispatch(fetchNextCharactersTC(nextPage))
    } else {
      dispatch(fetchNextCharactersTC(prevPage))
    }

    setPageNumber(newPageNumber);
  };

  return (
    <div className={stl.pagination}>
      <Pagination count={pagesCount} page={pageNumber} onChange={handleChange} />
    </div>
  );
}

export { PaginationControlled }