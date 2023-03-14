import "./home.scss";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import imageBackground from '../../background/background-s.jpg';



export default function Home() {


  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
 
 
  const [contacts, setContacts] = useState({
    id:"",
    surname: "",
    name: "",
    gym: "",
    phone:"",
    address:"",
    growth:"",
    weight:""
  });



  const onChange = (event)=> {
    const{name,value}=event.target;
    setContacts({...contacts,[name]:value});
  };

  const onAddContactClick = ()=> {
    dispatch({type:'ADD_CONTACTS',payload:{...contacts,id:Date.now()}});
    setContacts({id:'',name:'',surname:'',gym:'',phone:"",address:"",growth:"",weight:""});

   };

   const onListContactClick = ()=> {
    
    navigate(`/list_add_clients`);
  
  };


  return (
   

    <div className='home'>
       <div className="imageBackground">
      <img src={imageBackground} alt="fon" width="100%"  />
     
        <Box
          className='entry_field'
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Призвiще'
            variant='outlined'
            value={contacts.surname}
            onChange={onChange}
            name='surname'
            
          />
          <TextField
            id='outlined-basic'
            label="Iм'я"
            variant='outlined'
            value={contacts.name}
            name='name'
            onChange={onChange}
            
          />

<FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Зал</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                defaultValue={""}
                 value={contacts.gym}
                label='Age'
                name='gym'
                onChange={onChange}
              >
                <MenuItem value={'Аватар'}>Аватар</MenuItem>
                <MenuItem value={'Галактика'}>Галактiка</MenuItem>
              </Select>
            </FormControl>
            
       

          <Stack
            spacing={2}
            direction='row'
          >
            <Button
              variant='contained'
              size='small'
              onClick={onAddContactClick}
            >
              Завантажити
            </Button>
            <Button
              variant='contained'
              size='small'
              onClick={onListContactClick}
            >
              Клiенти
            </Button>
          </Stack>
        </Box>

      
     </div>
    </div>
  );
}
