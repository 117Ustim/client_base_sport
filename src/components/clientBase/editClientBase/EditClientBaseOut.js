import Button from "@mui/material/Button";

export default function EditClientBaseOut(props) {

  // console.log(props.exercise.id,'jj')
  return(
<>
   
          
   
     <ul key={props.exercise.id}>
       <li>
         <h5>
           {props.exercise.name}
           <Button
             className="delete"
               variant="contained"
               onClick={() => props.deleteExercise(props.exercise.id)}
           >
             <span>Del</span>
           </Button>
         </h5>
       </li>
     </ul>
 

</>
  )}