import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const NoticeDialog = (props) => {
    return (
        <Dialog
        open={props.enable}
        onClose={props.handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description" >
            <DialogTitle id='dialog-title' >
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button 
                variant="contained" 
                onClick={props.handleButton} 
                autoFocus 
                color='secondary' >Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoticeDialog;