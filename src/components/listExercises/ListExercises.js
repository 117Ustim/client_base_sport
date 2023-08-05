import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function ListExercises(props) {
return (
<div className='list-exercises'>
  
<List>
        {props.categories.map((category) => {
          return (
            <ListItem className='blockPosition' key={category.id} disablePadding>
              {/* <ListItemButton> */}
                <div className='data-list'>
                
                   <ListItemText  primary={category.name} /> 
                
                  
                  {props.exercises

                    .filter((exercise) => exercise.categoryId === category.id)
                    .map((exercise) => (
                      <div key={exercise.id} onClick={() => props.moveNameExercise(exercise)} className='exercises'>
                        <h5 >{exercise.name}</h5>
                      </div>

                      
                    ))}
                </div>
              {/* </ListItemButton> */}
            </ListItem>
          );
        })}
      </List>
 </div>
);
}