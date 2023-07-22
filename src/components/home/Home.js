// import './index.scss';

import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import imageBackground from '../../background/bg_home.png';
import { EMPTY_CLIENT } from '../../constants';
import { createSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState(EMPTY_CLIENT);

  const onChange = (event) => {
    const { name, value } = event.target;
    const val = value !== '' ? value[0].toUpperCase() + value.slice(1) : '';
    setContacts({ ...contacts, [name]: val });
  };

  const onAddContactClick = () => {
    setContacts(EMPTY_CLIENT);

    axios.post('http://localhost:9000/clients', contacts).then((data) => {});
  };

  // const onListContactClick = () => {
  //   navigate(`/home2`);
  // };

  const onButtonSearch = () => {
    navigate({
      pathname: 'list_add_clients',
      search: createSearchParams({
        gym: contacts.gym,
        sex: contacts.sex,
        // Параметры для страницы и колличество выводов на странице
        page: 1,
        limit: 10,
      }).toString(),
    });
  };

  return (
    <div className='home'>
   
        <fieldset>
          <div className="form-add">
          <div className='home_input'>
            <input
              placeholder='Призвiще'
              value={contacts.surname}
              onChange={onChange}
              name='surname'
            />
            <input
              placeholder="Iм'я"
              value={contacts.name}
              name='name'
              onChange={onChange}
            />
            <input
              placeholder='Телефон'
              value={+contacts.phone || ''}
              name='phone'
              onChange={onChange}
            />

            <select value={contacts.sex || ''} name='sex' onChange={onChange}>
              <option className='select' value={''} defaultValue={''}>
                Стать
              </option>
              <option value={'Чоловiча'}>Чоловiча</option>
              <option value={'Жiноча'}>Жiноча</option>
            </select>

            <select value={contacts.gym || ''} name='gym' onChange={onChange}>
              <option value={''} defaultValue={''}>
                Зал
              </option>
              <option value={'Аватар'}>Аватар</option>
              <option value={'Галактика'}>Галактiка</option>
            </select>
</div>
            <div className='button-add'>
              <input
                className='btn _sub'
                type='submit'
                value='Додати'
                onClick={onAddContactClick}></input>
            </div>
          

          </div>
         
        </fieldset>
     

      {/* ---------------------------------------SEARCH    */}
      <fieldset>
        <div className='form_search'>
          <div className='home_input'>
            <select name='gym' onChange={onChange}>
              <option className='select' value={''} defaultValue={''}>
                Зал
              </option>
              <option value={'Аватар'}>Аватар</option>
              <option value={'Галактика'}>Галактiка</option>
            </select>

            <select name='sex' onChange={onChange}>
              <option value={''} defaultValue={''}>
                Стать
              </option>
              <option value={'Чоловiча'}>Чоловiча</option>
              <option value={'Жiноча'}>Жiноча</option>
            </select>
          </div>
          <div className='button_search'>
         
              <input
                className='btn _sub'
                type='submit'
                value='Пошук'
                onClick={onButtonSearch}></input>
         
          </div>
        </div>
      </fieldset>
    </div>
  );
}
