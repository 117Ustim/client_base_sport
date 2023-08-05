import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/ControlPoint";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from 'react';
import axios from "axios";
import TemporaryDrawer from '../drawer/TemporaryDrawer';
import ListExercises from '../listExercises/ListExercises';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {

  

  const [value, setValue] = React.useState(0);
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openDrawer, setOpenDrawer] = useState({ right: false });
  const [planExercises, setPlanExercises] = useState({});
  const [arrayPlanExercises, setArrayPlanExercises] = useState([]);



  useEffect(() => {
   
    axios.get('http://localhost:9000/categories').then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

    axios.get('http://localhost:9000/exercises').then((response) => {
      setExercises(response.data);
      // console.log(response.data, 'data');
    });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
  
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      setOpenDrawer({ ...openDrawer, [anchor]: false });
    }else {
     setOpenDrawer({ ...openDrawer, [anchor]: open }); 
    }

    
  };
  const moveNameExercise = (e) => {
    const temp = {
      ...planExercises,
      planExercises: e.name,
      id: e.id + 1,
    };
    setArrayPlanExercises([...arrayPlanExercises, temp]);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="basicTabs-blockButtons">
           <button className="addWeeks_basicTabs" onClick={props.onAddClick}>
         
            <AddIcon  /> Недiля
         
          
        </button>
        <button
             className="basicTabs-addExercises"
               onClick={(e) => toggleDrawer('right', true)(e)}
              >
                
               <AddIcon /> Вправа
            </button>
        </div>
       

            <div className='drawer'>
              <TemporaryDrawer
                openDrawer={openDrawer}
                toggleDrawer={toggleDrawer}>
                <ListExercises
                  categories={categories}
                  exercises={exercises}
                  moveNameExercise={moveNameExercise}
                />
              </TemporaryDrawer>
            </div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {props.tabs?.map((tab) => {
            return (
              <Tab key={tab.id} label={tab.name} {...a11yProps(tab.id)} />
            );
          })}
        </Tabs>
      </Box>
      {props.tabs?.map((tab, index) => {
        return (
          <CustomTabPanel key={tab.id + index} value={value} index={index}>
            {React.cloneElement(props.children, tab)}
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}