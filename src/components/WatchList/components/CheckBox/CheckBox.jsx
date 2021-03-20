import React, { useState } from 'react';
//material-ui
import Switch from '@material-ui/core/Switch';


const Switches = ({onToggleDone, itemId, isDone}) => {
  const [isChecked, setIsChecked] = useState({checkbox: false});

  const handleChange = (event) => {
    setIsChecked({ ...isChecked, [event.target.name]: event.target.checked });
		onToggleDone(itemId);
  };

  return (
		<Switch
			checked={isDone}
			onChange={handleChange}
			color="primary"
			name="checkbox"
			inputProps={{ 'aria-label': 'primary checkbox' }}
		/>  
  );
}

export { Switches }