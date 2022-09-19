import React,{useState ,useEffect} from "react";
import { Button, Grid ,Paper, TextField, Typography,Radio ,RadioGroup, FormLabel, FormControl, Checkbox,Select, 
    FormControlLabel,TextareaAutosize ,FormGroup,Box,MenuItem} from "@mui/material";
import axios from 'axios';
import {useCookies} from 'react-cookie';

export const Help=() =>{
    const paperStyle={padding:'30px 30px',width:'450px',margin:"20px auto"}
    const buttonColor={background:'#2A628F' ,padding:'10px 97px',margin :'5px',width:100}
    const [Priority,setPriority] = useState('');
    const [Description,setDescription] = useState('');
    const [Message,setMessage] = useState('');
    const [Type,setType] = useState('');
    const [cookies] = useCookies('proxy');
    
    const handlePriority = ({target}) =>
    {
        setPriority(target.value);
    }
    const handleDescription = ({target}) =>
    {
        setDescription(target.value);
    }
    const handleType =({target}) =>
    {
        setType(target.value);
    }
    const handleMessage= ({target}) =>
    {
        setMessage(target.value);
    }
    const handleSubmit =async({target}) =>
    {
      const Help = {
        priority:Priority,
        discription:Description,
        message:Message,
        type:Type ,
    };
  await axios.post(`${cookies.proxy}/api/help/record`,Help)
  .then((res)=>{
  console.log(res.data);
  }).catch((err)=>{
    console.log(err);
  })
    }
    return(
        <Grid >
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <div> <img src='Logo.jpg' alt=''/></div>
            <h1>Help</h1>
            <Typography variant='caption'>
                Help
            </Typography>
            </Grid>
            <form>
                <br/>
                <Box component="form" sx={{'& .MuiTextField-root': { width: '390px' },}} noValidate autoComplete="off">
             <Select 
                  label='priority'
                  labelId='select-priority-label'
                  id='Priority'
                  name='Priority'
                  value={Priority} 
                  onChange={handlePriority}
                    variant='standard' >
                        <MenuItem value=''>
                            <div style={{marginLeft: 80,width:350}}>Select</div>
                        </MenuItem>
                        <MenuItem value='High'>
                            <div style={{marginLeft: 80,width:350}}>High</div>
                        </MenuItem>
                        <MenuItem value='Middle'>
                            <div style={{marginLeft: 80,width:350}}>Normal</div>
                        </MenuItem>
                        <MenuItem value='Low'>
                            <div style={{marginLeft: 80,width:350}}>Low</div>
                        </MenuItem>
                </Select>
                </Box>
                <br/>
                <TextField fullWidth label='Discription'placeholder="Enter Discription" value={Description}  onChange={handleDescription}/>
                <br/><br/>
                <FormLabel component="legend">Message</FormLabel>
                <TextareaAutosize value={Message} style={{ width: 400, height:100 }}  onChange={handleMessage}/>
                <FormControl component="fieldset">
                <FormLabel component="legend">Classify Support</FormLabel>
                <RadioGroup  value={Type} aria-label="support" name="support" style={{display:'initial'}} onChange={handleType}>
                    <FormControlLabel value="tecnicalsupport" control={<Radio/>} label="Tecnical Support"/>
                    <FormControlLabel value="adminsupport" control={<Radio/>} label="Admin Support"/>
                </RadioGroup>
                </FormControl>
                <br/><br/>
                <div align="center">
                <Button onClick={handleSubmit} variant="contained" style={buttonColor} >Submit</Button>
                </div>
            </form>
        </Paper>
    </Grid>
    )
}
