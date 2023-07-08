import "./planClient.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PlanClient() {
  const navigate = useNavigate();
  const params = useParams();


  const onButtonBack = () => {
    navigate(-1);
  };
  const onButtonBase = () => {
    navigate(`/client_base/${params.id}`);
  };

  const onButtonAddTraining = () => {
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
    </div>
  );
}
