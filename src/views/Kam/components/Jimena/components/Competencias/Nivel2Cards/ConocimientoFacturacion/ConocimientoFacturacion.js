import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

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
    backgroundColor: 'brown',
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

const ConocimientoFacturacion = props => {
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
              CONOCIMIENTO DE DETALLES DE FACTURACION
            </Typography>
            <Typography variant="h3">66%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <DescriptionIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={66}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

ConocimientoFacturacion.propTypes = {
  className: PropTypes.string
};

export default ConocimientoFacturacion;
