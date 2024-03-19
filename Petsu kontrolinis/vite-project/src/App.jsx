import AddAppointment from "./components/Appointment";
import PetList from "./components/petList";
import { getAllData } from "./Services/get";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {

  const [pets, setPets] = useState([]);
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const response = await getAllData();

      setPets(response);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData()
  }, [update])

  return (
    <>
      <Header />
      <AddAppointment setUpdate={setUpdate}/>
      <PetList pets={pets} setUpdate={setUpdate}/>
      {error}
    </>
  );
}

export default App;