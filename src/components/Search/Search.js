import React,{ useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const [ alertMsg, setAlertMsg ] = useState("");
  const navigate = useNavigate();


  const handleSearch = (e) => {


      e.preventDefault();
      const input = e.currentTarget.keyword.value;

      if(input == ''){
        setAlertMsg('Los campos no pueden estar vacíos!')
        return;
      }

      navigate(`/Results?search=${input}`)
  }

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
        return;
    }



},[alertMsg]);

  return (
    <>
    <form className='flex ' onSubmit = { handleSearch }>
          <TextField type='text' name='keyword' placeholder='Buscar películas' />
          <Button  className='mx-5' type='submit'> IconoBuscar </Button>
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

export default Search