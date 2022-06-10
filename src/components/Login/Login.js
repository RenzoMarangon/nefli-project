import React, { useEffect, useState } from 'react';  
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {

    const [ alertMsg, setAlertMsg ] = useState("");

    const [open, setOpen] = React.useState(false);

    /*ALERT*/
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };





    useEffect(()=>{

        if(alertMsg){
            setOpen(true);
            setTimeout(()=>{
                setAlertMsg('')
            },1200)
        }

    },[alertMsg]);
    const [ userIsLoged, setUserIsLoged ] = useState(false);

    const navigate = useNavigate()

    const submitForm = (e) =>{
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        if( email === '' || password === '' ){
            setAlertMsg('Los campos deben estar llenos')
            return;
        }
    
        if( !validateEmail( email ) ){
            setAlertMsg('E-mail no válido')
            return;
        }
    
        if( email !== 'challenge@alkemy.org' ||  password !== 'react' ){
            setAlertMsg('E-mail o contraseña no válidos')
              return;
        }
    
        axios
            .post( 'http://challenge-react.alkemy.org/', {email,password} )
            .then(( token ) => {
                
                token = token.data.token;
                sessionStorage.setItem( 'tokens', token );
                setTimeout(()=>{
                    navigate('/MovieList')
                },1500)
            })
    
    
    }
    
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

  return (
      <>     
        <form className='Login-container container w-60 h-60  flex flex-col' onSubmit={ submitForm }>
            <TextField label="Email" type='email' name='email' variant="outlined" className='Login-container__input' />

            <TextField label="Contraseña" type='password' name='password' variant="outlined" className='Login-container__input' />


            <Button className='Login-container__submit' type='submit'> Iniciar sesión </Button>
        </form>
                
        <Snackbar
            open={open} 
            autoHideDuration={1000} 
            onClose={handleClose}
            anchorOrigin={{
                vertical:'top',
                horizontal:'right'
            }}
        >
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {alertMsg}
            </Alert>
        </Snackbar>
      </>
  )
}

export default Login