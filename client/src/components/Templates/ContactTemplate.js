
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {contactStyles} from '../../styles/page/contact_styles';
import Container from '@material-ui/core/Container';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
/* 
  TO-DO
  Wipe input fields an retrieve a successfull message in case everything is ok
  Add React Router, and configure the forms
*/
function MessagePane(){
  const [open, setOpen] = useState = React.useState(false);
 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const sendMail = (message)=>{
  fetch(`mail/send`,{
    method: 'POST',
    body:JSON.stringify(message),
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:9080/mail/send'
    }
  }).then(res => res.json)
}
const submitValue = (name,email,phone,comment) => {
  const frmdetails = {
    'data':{
      'name' : name,
      'comment' : comment,
      'telephone' : phone,
      'email' : email
    }
  }
sendMail(frmdetails);
}
export default function Contact(){
  const classes = contactStyles();

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [telephone, setPhone] = useState('');
const [comments, setComment] = useState('');

  return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
       ¡ Contactanos !
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Nombre"
              onBlur={val => setName(val.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Tu Dirección Email"
              onBlur={val => setEmail(val.target.value)}
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="telephone"
              label="Telefono"
              id="telephone"
              onBlur={val => setPhone(val.target.value)}
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              rows={8}
              fullWidth
              name="comments"
              label="Comentarios Adicionales"
              onBlur={val => setComment(val.target.value)}
              id="comments"
              multiline={true}
            />
          </Grid>
        </Grid>
        <Button
          onSubmit={()=>{
            submitValue(name,email,telephone,comments);
            console.log("sended Correctly")
          }}
          variant="contained"
          className={classes.submit}
        >
          Enviar Correo
        </Button>
    </div>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>
  )
}
