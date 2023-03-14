import "./listAddClients.scss";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

export default function ListAddClients() {
 
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contactArray = useSelector((state) => state.contactArray);

  const onBackHome = () => {
    navigate("/");
  };

  const onDeleteContactClient = (id) => {
    dispatch({ type: "CONTACTS_DELETE", payload: id });
  };


  const onEditContactClient = (id) => {
    //  dispatch({ type: "CONTACTS_EDIT", payload: id });
    
    navigate(`/client_data/${id}`);
  };


  return (
    <div className='clientList'>
      <Button
        className='button_backHome'
        variant='contained'
        size='small'
        onClick={onBackHome}
      >
        Home
      </Button>

      <div className='features'>
        {contactArray.map((contact, index) => (
          <div
            key={index}
            className='feature'
          >
            <div className='feature-content'>
              <div className='index'>
                <span>{index + 1}</span>
              </div>

              <div className='surname'>
                <strong>{contact.surname}</strong>
                <span>{contact.name}</span>
              </div>

              <div className='gym'>
                <span>* {contact.gym} *</span>
              </div>

              <div className='button_block'>
                <Button
                  className='buttonDel'
                  variant='contained'
                  onClick={() => onEditContactClient(contact.id)}
                >
                  Редакт
                </Button>

                <Button
                  className='buttonDel'
                  variant='contained'
                  onClick={() => onDeleteContactClient(contact.id)}
                >
                  Удалить
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


