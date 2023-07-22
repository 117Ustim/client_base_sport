import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [text, setText] = useState({ name: "", description: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const onAddClick = async () => {
    await props.onAdd(text);
    setText({ name: "", description: "" });
  };

  return (
    <div>
      <Modal
        open={props.open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {props.header}
          </Typography>
          <div>
            <TextField
              label="Название Тренировки"
              value={text.name}
              name="name"
              onChange={onChange}
            ></TextField>
            <TextField
              label="Примечание"
              name="description"
              value={text.description}
              onChange={onChange}
            ></TextField>
          </div>
          <div>
            <Button onClick={onAddClick}>Add</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
