import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  player: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  playerIcon: {
    color: theme.palette.icon
  }
}));

const GraficaBasica = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [94, 75, 83],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Esmeralda', 'Jimena', 'Mariana']
  };

  const options = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const players = [
    {
      title: 'Esmeralda',
      value: '94',
      icon: <AccountCircleIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Jimena',
      value: '75',
      icon: <AccountCircleIcon />,
      color: theme.palette.error.main
    },
    {
      title: 'Mariana',
      value: '83',
      icon: <AccountCircleIcon />,
      color: theme.palette.warning.main
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Players Progreso Basica"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
        <div className={classes.stats}>
          {players.map(player => (
            <div
              className={classes.player}
              key={player.title}
            >
              <span className={classes.playerIcon}>{player.icon}</span>
              <Typography variant="body1">{player.title}</Typography>
              <Typography
                style={{ color: player.color }}
                variant="h2"
              >
                {player.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

GraficaBasica.propTypes = {
  className: PropTypes.string
};

export default GraficaBasica;
