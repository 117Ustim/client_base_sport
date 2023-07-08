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
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import imageBackground from "../../background/bg_home.png";
import { EMPTY_CLIENT } from "../../constants";
import { createSearchParams } from "react-router-dom";
import axios from "axios";



export default function Home() {
  const navigate = useNavigate();
 

  const [contacts, setContacts] = useState(EMPTY_CLIENT);

  const onChange = (event) => {  
    const { name, value } = event.target;
     const val = value !== '' ? value[0].toUpperCase() + value.slice(1) :  '';
    setContacts({ ...contacts, [name]: val
    });
  };

  const onAddContactClick = () => {
  
    setContacts(EMPTY_CLIENT);

    axios.post("http://localhost:9000/clients", contacts).then((data) => {
    
    });
  };

  // const onListContactClick = () => {
  //   navigate(`/home2`);
  // };

  const onButtonSearch = () => {
 
    navigate({
      pathname: "list_add_clients",
      search: createSearchParams({
        gym: contacts.gym,
        sex: contacts.sex,
        // Параметры для страницы и колличество выводов на странице
        page:1,
        limit:10
      }).toString(),
    });
  };



  return (
    
    <div className='home'>
      <div className='imageBackground'></div>
     
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
          <TextField
            id='outlined-basic'
            label='Телефон'
            variant='outlined'
            value={+contacts.phone || ''}
            name='phone'
            onChange={onChange}
          />
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Стать</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue={""}
              value={contacts.sex || ""}
              label='Age'
              name='sex'
              onChange={onChange}
            >
              <MenuItem value={"Чоловiча"}>Чоловiча</MenuItem>
              <MenuItem value={"Жiноча"}>Жiноча</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Зал</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue={""}
              value={contacts.gym || ""}
              label='Age'
              name='gym'
              onChange={onChange}
            >
              <MenuItem value={"Аватар"}>Аватар</MenuItem>
              <MenuItem value={"Галактика"}>Галактiка</MenuItem>
            </Select>
          </FormControl>

          <Stack
            spacing={2}
            direction='row'
          >
            <Button
            className="buttonAdd"
              variant='contained'
              size='small'
              onClick={onAddContactClick}
            >
              Завантажити
            </Button>
           
          </Stack>
        </Box>

        {/* ---------------------------------------SEARCH    */}

        <Box
          className='home_search'
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete='off'
        >
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Зал</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue={""}
              // value={contacts.gym}
              label='Age'
              name='gym'
              onChange={onChange}
            >
              <MenuItem value={"Аватар"}>Аватар</MenuItem>
              <MenuItem value={"Галактика"}>Галактiка</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Стать</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              defaultValue={""}
              // value={contacts.sex}
              label='Age'
              name='sex'
              onChange={onChange}
            >
              <MenuItem value={"Чоловiча"}>Чоловiча</MenuItem>
              <MenuItem value={"Жiноча"}>Жiноча</MenuItem>
            </Select>
          </FormControl>

          <Stack
            spacing={2}
            direction='row'
          >
            <Button
            className="buttonSearch"
              variant='contained'
              size='small'
              onClick={onButtonSearch}
            >
              Пошук
            </Button>

            {/* <Button
            // className="buttonSearch"
              variant='contained'
              size='small'
              onClick={onListContactClick}
            >
             home2
            </Button> */}
          </Stack>
        </Box>
     
    </div>
  );
}




{/* <div className="rr"></div> */}
        
{/* <form onSubmit={(e) => e.preventDefault()}>

        <fieldset className="textgroup" aria-labelledby="txt-q">
           <legend id="txt-q">Новый клиент</legend> 
           <label htmlFor="t1">Фамилия</label>
          <input id="t1" type="text" name="t1" />
         <label htmlFor="t2">Имя</label>
          <input id="t2" type="email" name="t2" />
          <label htmlFor="t3">Телефон</label>
          <input id="t3" type="text" name="t3" />
         
            <legend id="rad-q">Radio Button Group</legend>  
          <div className="radgroup" role="radiogroup" aria-labelledby="rad-q">
          <input id="r1" type="radio" name="r"  />
          <label htmlFor="r1">Аватар</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Галактика</label>
         </div>

<div className="radgroup_2" role="radiogroup" aria-labelledby="rad-q">
           <legend id="cb-q">Checkbox Button Group</legend> 
          <input id="r1" type="radio" name="r" />
          <label htmlFor="r1">Мужской</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Женский</label>
          
        </div> 


          <div className="btngroup" aria-labelledby="btn-q">
           <legend id="btn-q">Action Buttons</legend> 
          <input id="b3" className="btn cncl" type="button" value="Ввод" />
        </div>
        </fieldset>

 </form>
      
      </div>   */}
       
        
        
        
       





     
      