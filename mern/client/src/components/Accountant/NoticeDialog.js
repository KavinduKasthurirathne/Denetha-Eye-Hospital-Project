import React from "react";
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';


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
                {props.message}
            </DialogContent>
            <DialogActions>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button 
                    variant="contained" 
                    onClick={props.handleButton} 
                    autoFocus 
                    color='secondary' >
                        {props.loading ? <div style={{color: 'grey'}}>Confirm</div> : 'Confirm'}
                    </Button>
                    {(props.loading ? true : false) && (
                    <CircularProgress
                        size={24}
                        sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        }}
                    />
                    )}
                </Box>
            </DialogActions>
        </Dialog>
    );
};

export default NoticeDialog;