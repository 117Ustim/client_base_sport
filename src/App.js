import Home from "./components/home/Home";
import ClientData from "./components/clientData/ClientData";
import ListAddClients from "./components/listAddClients/ListAddClients";
import { Route, Routes } from "react-router";



export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/list_add_clients'
          element={<ListAddClients />}
        />
    
      <Route
          path='/client_data/:id'
          element={<ClientData />}
        />
      </Routes>
    </div>
  );
}
