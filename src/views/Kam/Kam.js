import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid  } from '@material-ui/core';

import {Esmeralda, Jimena, Mariana} from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const Kam = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
            <Grid
        container
        spacing={4}
      >
          <Esmeralda />
          <Mariana />
          <Jimena /> 
          
        </Grid>
    </div>
  );
};

export default Kam;
