import { useState, useEffect } from 'react';
import * as React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './temporaryDrawer.scss';
import EditClientBaseOut from './../clientBase/editClientBase/EditClientBaseOut';

export default function TemporaryDrawer(props) {
  const params = useParams();

  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`http://localhost:9000/clients-base/${params.id}`)
    //   .then((response) => {console.log(response.data,'rrrr')
    //     setExercises(response.data);
    //   });
    axios.get('http://localhost:9000/categories').then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

    axios.get('http://localhost:9000/exercises').then((response) => {
      setExercises(response.data);
      // console.log(response.data, 'data');
    });
  }, []);

  



// ---------------------------------------------------------------------------------------
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
// -------------------------------------------------------------------------------------------
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {categories.map((category) => {
          return (
            <ListItem key={category.id} disablePadding>
              {/* <ListItemButton> */}
                <div className='data-list'>
                  <ListItemText primary={category.name} />
                  {exercises

                    .filter((exercise) => exercise.categoryId === category.id)
                    .map((exercise) => (
                      <div key={exercise.id} onClick={() => props.moveNameExercise(exercise)} className='exercise'>
                        <h5 >{exercise.name}</h5>
                      </div>

                      
                    ))}
                </div>
              {/* </ListItemButton> */}
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            variant='contained'
            size='small'
            onClick={toggleDrawer(anchor, true)}>
            + упражнения
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
