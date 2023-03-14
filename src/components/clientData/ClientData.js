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
import { useNavigate } from 'react-router';


export default function ClientData() {

const navigate = useNavigate();


const onButtonBack = ()=> {
  navigate(`/list_add_clients`);
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
        className='entry_field'
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
        />
        <TextField
          id='standard-basic'
          label="Iм'я"
          variant='standard'
          name='name'
        />
        <TextField
          id='standard-basic'
          label='Телефон'
          variant='standard'
          name='phone'
        />
        <TextField
          id='standard-basic'
          label='Адрес'
          variant='standard'
          name='address'
        />
        <TextField
          id='standard-basic'
          label='Рост'
          variant='standard'
          name='growth'
        />
        <TextField
          id='standard-basic'
          label='Вага'
          variant='standard'
          name='weight'
        />

        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Зал</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            defaultValue={""}
            label='Age'
            name='gym'
          >
            <MenuItem value={"Аватар"}>Аватар</MenuItem>
            <MenuItem value={"Галактика"}>Галактiка</MenuItem>
          </Select>
        </FormControl>

        <Stack
          spacing={2}
          direction='row'
        >
          <Button
            variant='contained'
            size='small'
          >
            Завантажити
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
