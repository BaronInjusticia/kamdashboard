import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: 'red',
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const AltasBajasMoviles = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              CAPACIDAD PARA REALIZAR ALTAS, BAJAS Y CAMBIOS DE SERVICIOS MOVILES 
            </Typography>
            <Typography variant="h3">88%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ComputerIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={88}
          variant="determinate"
        />
      </CardContent>
    </Card>
  )
};

AltasBajasMoviles.propTypes = {
  className: PropTypes.string
};

export default AltasBajasMoviles;
