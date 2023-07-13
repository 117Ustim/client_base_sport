import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './tabs.scss';

export default function LabTabs(props) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
     setValue(newValue);
   
  };

  return (
    <div className='labtabs'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              {props.tab?.map((lab) => {
                return (
                  <>
                    <Tab key={lab.label}label={lab.label} value='1' />
                    <Tab label='Item Two' value='2' />
                    <Tab label='Item Three' value='3' />
                  </>
                );
              })}
            </TabList>
          </Box>
          {props.tab.map((data,index) => {
            return data?.weeks.map((el) => {
              return (
                <>
                  <TabPanel key ={index}className='date' value='1'>
                    <h3>{el.day}</h3>
                    <h5>{el.date}</h5>
                  </TabPanel>

                  {el.exercises.map((ex,index) => {
                    return (
                      <div key ={index} className='exercises'>
                        <h4>{ex.name}</h4>
                        <h5>{ex.times}</h5>
                      </div>
                    );
                  })}
                </>
              );
            });
          })}
        </TabContext>
      </Box>
    </div>
  );
}
