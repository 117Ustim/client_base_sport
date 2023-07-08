import "./listAddClients.scss";
import axios from "axios";
import { useNavigate } from "react-router";
//  import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ListAddClients() {

  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const [serverContacts, setServerContacts] = useState([]);
  const [page, setPage] = useState(
    params.get("page") ? Number(params.get("page")) : 1
  );
  const [pageQty, setPageQty] = useState(0);
  const [limit, setLimit] = useState(params.get("limit") ?? 10);

  const onButtonBackHome = () => {
    navigate("/");
  };

  const onButtonExercises = () => {
    navigate(`/edit_client_base/${params.id}`);
  };

  const onButtonPlanClient = (id, surname, name) => {
    navigate(`/plan_client/${id}/${surname} ${name}`);
  };

  const onDeleteContactClient = (id) => {
    // console.log(id)
    axios.delete(`http://localhost:9000/clients/${id}`).then(() => {
      setServerContacts(serverContacts.filter((client) => client.id !== id));
    });
  };

  const onEditContactClient = (id) => {
    navigate(`/client_data/${id}`);
  };

  useEffect(() => {
    const gym = params.get("gym");
    const searchParams = { page: page - 1, limit };
    if (gym) {
      searchParams.gym = gym;
    }
    const sex = params.get("sex");
    if (sex) {
      searchParams.sex = sex;
    }
    axios
      .get("http://localhost:9000/clients", { params: { ...searchParams } })
      .then((response) => {
        setServerContacts(response.data.data);
        setPageQty(Math.ceil(response.data.total / limit));
      });
  }, [params, page, limit]);

  return (
    <div className='clientList'>
      <Button
        className='button_backHome'
        variant='contained'
        size='small'
        onClick={onButtonBackHome}
      >
        Home
      </Button>

      <div className='features'>
        {serverContacts.map((contact, index) => (
          <div
            key={contact.id}
            className='feature'
          >
            <div className='feature-content'>
              <div className='index'>
                <span>{index + 1}</span>
              </div>

              <div className='surname'>
                <strong>{contact.data.surname}</strong>
                <span>{contact.data.name}</span>
              </div>

              <div className='gym'>
                <span>* {contact.data.gym} *</span>
              </div>
              <Button
                className='buttonPlan'
                variant='contained'
                onClick={() =>
                  onButtonPlanClient(
                    contact.id,
                    contact.data.surname,
                    contact.data.name
                  )
                }
              >
                План
              </Button>
              <div className='button_block'>
                <Button
                  className='buttonDel'
                  variant='contained'
                  onClick={() => onDeleteContactClient(contact.id)}
                >
                  Удалить
                </Button>
                <Button
                  className='buttonDel'
                  variant='contained'
                  onClick={() => onEditContactClient(contact.id)}
                >
                  Редакт
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => {
              setPage(num);
              // обновление page в адресной строке
              params.set("page", num);
              setParams([...params.entries()]);
            }}
            variant='outlined'
            shape='rounded'
          />
        )}
      </Stack>

      <Button
        className='button_addExercises'
        variant='contained'
        size='small'
        onClick={onButtonExercises}
      >
        Добавить упражнения
      </Button>
    </div>
  );
}
