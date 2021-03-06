import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  LinearProgress
} from '@material-ui/core';
import ComputerIcon from '@material-ui/icons/Computer';

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
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  progress: {
    marginTop: theme.spacing(3)
  }
}));

const AltasBajasFijos = props => {
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
              CAPACIDAD PARA REALIZAR ALTAS, BAJAS Y CAMBIOS DE SERVICIOS FIJOS 
            </Typography>
            <Typography variant="h3">60%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <ComputerIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={60}
          variant="determinate"
        />
      </CardContent>
    </Card>
  )
};

AltasBajasFijos.propTypes = {
  className: PropTypes.string
};

export default AltasBajasFijos;
