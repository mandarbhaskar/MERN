import React, { useState } from 'react'; 
import { Snackbar, Button } from '@mui/material'; 
 
function SimpleSnackbar() { 
  const [open, setOpen] = useState(false); 
 
  const handleClick = () => { 
    setOpen(true); 
  }; 
 
  const handleClose = () => { 
    setOpen(false); 
  }; 
 
  return ( 
    <div> 
      <Button variant="contained" onClick={handleClick}> 
        Show Snackbar 
      </Button> 
      <Snackbar 
        open={open} 
        autoHideDuration={3000} 
        onClose={handleClose} 
        message="Item added to cart" 
      /> 
    </div> 
  ); 
} 
 
export default SimpleSnackbar; 