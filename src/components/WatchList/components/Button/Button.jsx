import React from 'react';
//material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
		marginTop: '12px',
		marginLeft: '-1px'
  },
}));

const OutlinedButtons = ({type, name}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" type={type}>
        {name}
      </Button>      
    </div>
  );
}

export { OutlinedButtons }