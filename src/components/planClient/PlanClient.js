import "./planClient.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BasicTabs from "../tabs/BasicTabs";
import BasicList from "../list/BasicList";
import BasicModal from "../modal/BasicModal";
import Exercise from "../traning/Exercise";
import ExerciseContent from "../traning/ExerciseContent";

export default function PlanClient() {
  const navigate = useNavigate();
  const params = useParams();
  const [tabs, setTabs] = useState([
    {
      label: "1",
      content: (
        <ExerciseContent
          week={[
            {
              day: "Пн",
              date: "11.07.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
            {
              day: "Ср",
              date: "13.07.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
          ]}
        />
      ),
    },
    {
      label: "2",
      content: (
        <ExerciseContent
          week={[
            {
              day: "Пн",
              date: "18.07.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
            {
              day: "Ср",
              date: "20.07.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
          ]}
        />
      ),
    },
    {
      label: "3",
      content: (
        <ExerciseContent
          week={[
            {
              day: "Пн",
              date: "01.08.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
            {
              day: "Ср",
              date: "03.08.2023",
              exercises: [
                { name: "Жим", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим1", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
                { name: "Жим2", times: ["2х6 (70)", "2х4 (90)", "1х4 (110)"] },
              ],
            },
          ]}
        />
      ),
    },
  ]);
  const [weeks, setWeeks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onButtonBack = () => {
    navigate(-1);
  };
  const onButtonBase = () => {
    navigate(`/client_base/${params.id}`);
  };

  const onButtonAddTraining = (text) => {
    setWeeks([
      ...weeks,
      { primaryText: text.name, secondaryText: text.description },
    ]);
    setIsModalOpen(false);
  };

  return (
    <div className="planClient">
      <BasicModal
        header="Добавить тренировку"
        onAdd={onButtonAddTraining}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
      />
      <div className="back_Client_list">
        <Button variant="contained" size="small" onClick={onButtonBack}>
          {params.name}
        </Button>

        <Button
          className="button_addExercises"
          variant="contained"
          size="small"
          onClick={() => setIsModalOpen(true)}
        >
          Добавить тренировки
        </Button>

        <Button
          className="button_base"
          variant="contained"
          size="small"
          onClick={onButtonBase}
        >
          База
        </Button>
      </div>
      <div className="base-trainings-page">
        <div className="tranings-list">
          <BasicList items={weeks} />
        </div>
        <div className="tranings-content">
          <BasicTabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}
