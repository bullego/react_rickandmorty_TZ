import React, { useState } from 'react';
//material-ui
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
//components
import { OutlinedButtons } from '../Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
    display: 'flex',
    alignItems: 'flex-start'
  },
}));

const StateTextFields = ({addNewEpisode}) => {
  const classes = useStyles();
  const [episodeName, setEpisodeName] = useState('');

  const handleChange = (event) => {
    setEpisodeName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewEpisode(episodeName);
    setEpisodeName('')
  }

  return (
    <form className={classes.root}
          onSubmit={handleSubmit}
          noValidate autoComplete="off">    
      <TextField id="standard-name"
                 label="Add episode to watchlist"
                 value={episodeName}
                 onChange={handleChange}/>     

      <OutlinedButtons type='submit' name='Add' variant="outlined"/>
    </form>
  );
}

export { StateTextFields }