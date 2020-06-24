/* eslint-disable require-jsdoc */

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {Icons} from '../Footer/Footer.jsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Carousel} from 'react-responsive-carousel';
import cardConfigs from '../../clientConfigs/indexConfigs.json';
const meditacionImg = require('../../resources/meditation-png.jpg');
import {indexStyles} from '../../styles/page/index_styles'
const parejasImg = require('../../resources/parejas.png');
const terapiaImg = require('../../resources/terapia.jpg');


// Carousel component Separate from the Template
function BasicCarousel() {
  return (
    <Carousel renderThumbs={()=>{
      return [];
    }}>
      <div>
        <img src={meditacionImg}/>
        <p className="legend">Clases de Meditación</p>
      </div>
      <div>
        <img src={terapiaImg}/>
        <p className="legend">Consultas psicologicas</p>
      </div>
      <div>
        <img src={parejasImg}/>
        <p className="legend">Terapias de pareja</p>
      </div>
    </Carousel>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made by Jordan '}
      {new Date().getFullYear()}
    </Typography>
  );
}
// have a controller for the styles and dont delegate it to template


export function MenuOptions() {
  const classes = indexStyles();

  return (
    <React.Fragment>
      <AppBar position="relative" className={classes.navBarColorPalette}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.navOptions}>
            Logo
          </Typography>
          <Link variant="button" color="inherit" href="#" >
        <Typography variant="p" color="inherit" noWrap className={classes.navOptions}>
                Servicios
        </Typography>
      </Link>
      <Link variant="button" color="inherit" href="#" >
        <Typography variant="p" color="inherit" noWrap className={classes.navOptions}>
                Blog
        </Typography>
      </Link>
      <Link variant="button" color="inherit" href="#" >
        <Typography variant="p" color="inherit" noWrap className={classes.navOptions}>
                Contacto
        </Typography>
      </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
// Add carousel
export function Album() {
  const classes = indexStyles();
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <BasicCarousel/>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cardConfigs.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.descriptionText}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Más Información
                    </Button>
                    <Button size="small" color="primary">
                      Agendar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h4" align="center" display="inline" gutterBottom>
          <Icons/>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
