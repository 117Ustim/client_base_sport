import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./editClientBase.scss";
import EditClientBaseOut from "./EditClientBaseOut";
import { EMPTY_EXERCISES } from "../../../constants";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

export default function EditClientBase() {
  const params = useParams();

  const navigate = useNavigate();

  const onButtonBackClient = () => {
    navigate(-1);
  };

  const [client, setClient] = useState({});
  //  console.log(client,'data')
  const [categories, setCategories] = useState([]);

  const [exercise, setExercise] = useState({});

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/categories").then((response) => {
      console.log(response);
      setCategories(response.data);
    });

    axios.get("http://localhost:9000/exercises").then((response) => {
      setExercises(response.data);
    });

    axios.get(`http://localhost:9000/clients/${params.id}`).then((response) => {
      //  console.log(response.data,'data')
      setClient(response.data);
    });
  }, []);

  const buttonAddExercises = () => {
    axios
      .post(`http://localhost:9000/exercises`, {
        ...exercise,
        clientId: params.id,
      })
      .then((response) => {
        setExercises([...exercises, { ...exercise, id: response.data.id }]);
        setExercise({});
      });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setExercise({ ...exercise, [name]: value });
  };

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:9000/exercises/${id}`).then(() => {
      setExercises(exercises.filter((exercise) => exercise.id !== id));
    });
  };
  return (
    <>
      <div className='editClientBase'>
        <Button
          className='buttonBack_clientList'
          variant='contained'
          onClick={() => onButtonBackClient()}
        >
          Назад
        </Button>
      </div>

      <div className='AddCategory'>
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id='demo-simple-select-autowidth-label'>
            Категорiя
          </InputLabel>

          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            name='categoryId'
            value={exercise?.categoryId || ""}
            onChange={onChange}
            autoWidth
            label='Категорiя'
            size='small'
          >
            {categories.map((c) => {
              return (
                <MenuItem
                  key={c.id}
                  value={c.id}
                >
                  {c.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <Box
          component='form'
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Вправа'
            variant='outlined'
            size='small'
            name='name'
            value={exercise?.name || ""}
            onChange={onChange}
          />

          <FormControl
            className='input_sex'
            sx={{ m: 1, minWidth: 130 }}
          >
            <InputLabel id='demo-simple-select-autowidth-label'>
              Стать
            </InputLabel>
            <Select
              labelId='demo-simple-select-autowidth-label'
              id='demo-simple-select-autowidth'
              name='sex'
              value={exercise?.sex || ""}
              onChange={onChange}
              autoWidth
              label='Стать'
              size='small'
            >
              <MenuItem value={"Чоловiча"}>Чоловiча</MenuItem>
              <MenuItem value={"Жiноча"}>Жiноча</MenuItem>
            </Select>
          </FormControl>

          <Button
            className='buttonAddCategory'
            variant='contained'
            onClick={() => buttonAddExercises(exercises)}
          >
            Добавити
          </Button>
        </Box>
      </div>

      <div className='edit_exercises'>
        {categories?.map((category) => {
          return (
            <div
              className='column_exercises'
              key={category.id}
            >
              <h4>Категория {category.name} </h4>

              <div className='name_exercise'>
                {exercises

                  .filter((exercise) => exercise.categoryId === category.id)
                  .map((exercise) => (
                    <EditClientBaseOut
                      exercise={exercise}
                      deleteExercise={deleteExercise}
                      key={exercise.id}
                    />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
