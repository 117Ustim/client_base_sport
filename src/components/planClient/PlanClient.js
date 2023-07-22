import "./planClient.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
 import axios from "axios";
import { useParams } from "react-router-dom";
import LabTabs from '../tabs/LabTabs';
import Modal from '../modal/Modal';
import ListTraining from '../list/ListTraining';
import TemporaryDrawer from "../drawer/TemporaryDrawer";




export default function PlanClient(props) {
  const navigate = useNavigate();
  const params = useParams();










  const onButtonBack = () => {
    navigate(-1);
  };
  const onButtonBase = () => {
    navigate(`/client_base/${params.id}`);
  };
 

  const [textModal, setTextModal] = useState([]);
  
  const onButtonAddTraining = (text) => {
setTextModal([
  ...textModal,{primaryText:text.name,secondaryText:text.notes} 
]);

     navigate(`/add_training/${params.id}`);
  };




  return (
    <div className='planClient'>
      <div className='back_Client_list'>
        <Button
          variant='contained'
          size='small'
          onClick={onButtonBack}
        >
          {params.name}
        </Button>
      </div>
    
     
      <Button
         className='button_addExercises'
        variant='contained'
        size='small'
        onClick={onButtonAddTraining}
      >
        Добавить тренировку
      </Button>
      
      <div className='button_base'>
        <Button
          variant='contained'
          size='small'
          onClick={onButtonBase}
        >
          База
        </Button>
      </div>
      <ListTraining textModal={textModal}/>
      <Modal onAdd={onButtonAddTraining}/>
      <LabTabs/>
      
    </div>
  );
}
