import "./planClient.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LabTabs from '../tabs/Tabs';
import Modal from '../modal/Modal';
import ListTraining from '../list/ListTraining';


export default function PlanClient() {
  const navigate = useNavigate();
  const params = useParams();


  const [tab, setTab] = useState([
    {
      label: "1",
      weeks: [
        {
          day: "Пн",
          date: "11.07.2023",
          exercises: [
            { name: "Жим лежа", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
            { name: "Разводка лежа", times: ["2х6 (70)"] },
            { name: "Бицепс(шт)", times: ["2х6 (70)", "2х4 (90)"] },
          ],
        },
        {
          day: "Ср",
          date: "13.07.2023",
          exercises: [
            { name: "Присед", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
            { name: "Разгиб ног", times: ["2х6 (70)"] },
            { name: "Блок за голову", times: ["2х6 (70)"] },
          ],
        },
      ],
    }
  ]);


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

    // navigate(`/add_training/${params.id}`);
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
      
      {/* <Button
         className='button_addExercises'
        variant='contained'
        size='small'
        // onClick={onButtonAddTraining}
      >
        Добавить тренировку
      </Button> */}
      
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
      <LabTabs tab={tab}/>
    </div>
  );
}
