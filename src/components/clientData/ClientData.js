import "./clientData.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import PhotoAvatar from "../../customerPhotos/465758.jpg";
import { useNavigate } from "react-router";
import { EMPTY_CLIENT } from "../../constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

export default function ClientData() {
  const params = useParams();

  const navigate = useNavigate();

  const [dataUpdateClient, setDataUpdateClient] = useState(EMPTY_CLIENT);

  const onButtonBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    // запрос на сервер по id на изменение данных
    axios.get(`http://localhost:9000/clients/${params.id}`).then((resp) => {
      console.log(resp.data.data);
      setDataUpdateClient(resp.data.data);
    });
  }, [params]);

  const onChange = (event) => {
    const { name, value } = event.target;
    const val = value !== "" ? value[0].toUpperCase() + value.slice(1) : "";
    setDataUpdateClient({ ...dataUpdateClient, [name]: val });
  };

  const onAddContactClick = () => {
   
    // Запрос на редактирование
    axios
      .put(`http://localhost:9000/clients/${params.id}`, {
        data: dataUpdateClient,
      })
      .then((resp) => {
        // window.alert('Изменения сохранены');
      });
    enqueueSnackbar("Изменения сохранены!", { autoHideDuration: 1500 });
  };

  return (
    <div className='clientData'>
      <Button
        variant='contained'
        size='small'
        onClick={onButtonBack}
      >
        Назад
      </Button>

      <Stack
        direction='row'
        spacing={2}
      >
        <Avatar
          alt='Remy Sharp'
          src={PhotoAvatar}
          sx={{ width: 100, height: 100 }}
        />
      </Stack>

      <Box
        // className='entry_field'
        component='form'
        sx={{
          "& > :not(style)": { m: 1, width: "20ch" },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-basic'
          label='Призвiще'
          variant='standard'
          name='surname'
          value={dataUpdateClient?.surname || ""}
          onChange={onChange}
        />

        <TextField
          id='standard-basic'
          label="Iм'я"
          variant='standard'
          name='name'
          value={dataUpdateClient?.name || ""}
          onChange={onChange}
        />
        <TextField
          id='standard-basic'
          label='Телефон'
          variant='standard'
          name='phone'
          value={+dataUpdateClient?.phone || ""}
          onChange={onChange}
        />
        <TextField
          id='standard-basic'
          label='Адрес'
          variant='standard'
          name='address'
          value={dataUpdateClient?.address || ""}
          onChange={onChange}
        />
        <TextField
          id='standard-basic'
          label='Зрiст'
          variant='standard'
          name='growth'
          value={+dataUpdateClient?.growth || ""}
          onChange={onChange}
        />
        <TextField
          id='standard-basic'
          label='Вага'
          variant='standard'
          name='weight'
          value={+dataUpdateClient?.weight || ""}
          onChange={onChange}
        />
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Стать</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            defaultValue={""}
            label='Age'
            name='sex'
            value={dataUpdateClient?.sex}
            onChange={onChange}
          >
            <MenuItem value={"Чоловiча"}>Чоловiча</MenuItem>
            <MenuItem value={"Жiноча"}>Жiноча</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Зал</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            defaultValue={""}
            label='Age'
            name='gym'
            value={dataUpdateClient?.gym}
            onChange={onChange}
          >
            <MenuItem value={"Аватар"}>Аватар</MenuItem>
            <MenuItem value={"Галактика"}>Галактiка</MenuItem>
          </Select>
        </FormControl>

        <SnackbarProvider />
        <Stack
          spacing={2}
          direction='row'
        >
          <Button
            variant='contained'
            size='small'
            onClick={onAddContactClick}
          >
            Зберегти
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
