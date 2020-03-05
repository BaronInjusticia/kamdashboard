import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Portal, Grid  } from '@material-ui/core';

import {
  //*Top
  TablaGeneral,
  GraficaBasica,
  TablaEspecifica,
  GraficaEspecifica,
  //*Cards1
  EquiposSinGarantia,
  CapacidadValidacionGarantias,
  CaracteristicasEnlaces,
  AnalisisContratosCarriers,
  //*Cards2
  ManejoGoogleSheetsDocs,
  UsoOnepassword,
  ConocimientoFacturacion,
  AnalisisNumericos,
  //*Cards3
  DisenoReportes,
  VisionMisionValores,
  OrotografiaRedaccion,
  UsoHub,
  //*Cards4
  EstructuracionManuales,
  ClientesTmaaS,
  AltasBajasMoviles,
  AltasBajasFijos,
  //*Cards5
  UsoAsana,
  UsoDrive,
  CompraCotizacionEquipos,
  CompartirInformacion,
  //*Cards6
  EnvioEquipos,
  ObtenerAltaProvedores,
  ManejoProvedoresContactos,
  ImpuestosServiciosTele,
  //*Cards7
  UsoExcel,
  UsoPortalFacturacion,
  ClientesPrincipalesContactos,
  UsoZendesk,
  //*Card8
  Facturacion4PT
} from './components';

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

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };


  return (
    <div className={classes.root}>
      <button
        onClick={handleClick}
      >Mariana</button>
      {show ? (
        <Portal container={container.current}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TablaGeneral />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <GraficaBasica /> 
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TablaEspecifica />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <GraficaEspecifica /> 
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <EquiposSinGarantia />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CapacidadValidacionGarantias />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CaracteristicasEnlaces/>
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AnalisisContratosCarriers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ManejoGoogleSheetsDocs />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoOnepassword />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ConocimientoFacturacion />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AnalisisNumericos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <DisenoReportes />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <VisionMisionValores />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <OrotografiaRedaccion />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoHub />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <EstructuracionManuales />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ClientesTmaaS />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AltasBajasMoviles />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <AltasBajasFijos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoAsana />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoDrive />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CompraCotizacionEquipos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <CompartirInformacion />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <EnvioEquipos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ObtenerAltaProvedores />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ManejoProvedoresContactos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ImpuestosServiciosTele />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoExcel />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoPortalFacturacion />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ClientesPrincipalesContactos />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <UsoZendesk />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Facturacion4PT />
        </Grid>
        </Grid>
        </Portal>
        ) : null}
      <div className={classes.alert} ref={container} />
    </div>
  );
};

export default Kam;
