import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar,LinearProgress } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
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
    backgroundColor: "purple",
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
    color: theme.palette.success.dark
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginRight: theme.spacing(1)
  }
}));

const ManejoGoogleSheetsDocs = props => {
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
              MANEJO DE GOOGLE SHEETS Y DOCS
            </Typography>
            <Typography variant="h3">77%</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MonetizationOnIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <LinearProgress
          className={classes.progress}
          value={77}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};

ManejoGoogleSheetsDocs.propTypes = {
  className: PropTypes.string
};

export default ManejoGoogleSheetsDocs;
