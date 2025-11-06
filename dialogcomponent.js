import React, { useState } from 'react'; 
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from 
'@mui/material'; 
 
function SimpleDialog() { 
  const [open, setOpen] = useState(false); 
 
  const handleClickOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false); 
 
  return ( 
    <div> 
      <Button variant="outlined" onClick={handleClickOpen}> 
        Open Dialog 
      </Button> 
      <Dialog open={open} onClose={handleClose}> 
        <DialogTitle>Dialog Title</DialogTitle> 
        <DialogContent> 
          This is the dialog content. 
        </DialogContent> 
        <DialogActions> 
          <Button onClick={handleClose} color="primary">Close</Button> 
          <Button onClick={handleClose} color="primary">Confirm</Button> 
        </DialogActions> 
      </Dialog> 
    </div> 
  ); 
} 
 
export default SimpleDialog;