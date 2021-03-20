import React from 'react';
//material-ui
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//styles
import stl from './Filter.module.css';


const Filter = ({filterOptions, filterName, currentOption, handlerFilter}) => {
  const handleChange = (event) => {
    const newFilterOption = event.target.value;

    handlerFilter(filterName, newFilterOption);
  };

	return (
		<div>
			 <FormControl className={stl.filter}>
        <InputLabel id="demo-simple-select-label">Filter by {filterName}</InputLabel>
        <Select labelId="demo-simple-select-label"
         			  id="demo-simple-select"
         			  value={currentOption}                
       			    onChange={handleChange}>
					{filterOptions.map((option, index) => {
						return (
							<MenuItem key={index} value={option}>{option}</MenuItem>
						)
					})}
        </Select>
      </FormControl>
		</div>
	);
};

export { Filter };