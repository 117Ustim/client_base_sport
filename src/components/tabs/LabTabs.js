import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './labTabs.scss';
import Button from '@mui/material/Button';
import TemporaryDrawer from './../drawer/TemporaryDrawer';
import Data from './date/Date';

export default function LabTabs() {


  const [arrayPlanExercises, setArrayPlanExercises] = useState([]);
  console.log(arrayPlanExercises, 'hhh');

  const moveNameExercise = (e) => {
    const temp = {
      ...planExercises,
      planExercises: e.name,
      id: e.id + 1,
    };
    // setPlanExercises(temp);
    setArrayPlanExercises([...arrayPlanExercises, temp]);
  };

  
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tab, setTab] = useState([]);
  const addTab = () => {
    setTab([...tab, { label: tab.length + 1, weeks: [] }]);
  };

  

  const [planExercises, setPlanExercises] = useState({});
  console.log(planExercises, 'hhh2');

  
  
  return (
    <div className='labtabs'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <div className='add-button_tab'>
            <Button onClick={addTab} variant='contained' size='small'>
              +
            </Button>

            <div className='drawer'>
              <TemporaryDrawer moveNameExercise={moveNameExercise} />
            </div>
          </div>

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              {tab?.map((lab) => {
                return (
                  <Tab key={lab.label} label={lab.label} value={lab.label} />
                );
              })}
            </TabList>
          </Box>

          <Data />

          {tab.map((data, index) => {
            return data?.weeks.map((el) => {
              return (
                <TabPanel key={el.date} value={data.label}>
                  <div className='block_day'>
                    <div className='date'>
                      <h3>{el.day}</h3>
                      <h5>{el.date}</h5>
                    </div>

                    {el.exercises.map((ex, index) => {
                      return (
                        <div key={index + ex.name} className='exercises'>
                          <h4>{ex.name}</h4>
                          <h5>{ex.times}</h5>
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              );
            });
          })}
        </TabContext>
      </Box>
    </div>
  );
}
