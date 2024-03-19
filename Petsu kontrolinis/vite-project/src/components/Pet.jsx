import { deleteData } from "../Services/delete";

function Pet({ pet, setUpdate }) {

  const deleteHandler = async (id) => {
    await deleteData(id);
    setUpdate((update) => update + 1);
  }


  const { petName, petOwner, date, aptNotes, id } = pet;
  return (
    <div className="box">
      <div key={id} className="petappointment">
        <h1>{petName}</h1>
        <p>{petOwner}</p>
        <p>{date}</p>
        <p>{aptNotes}</p>
        <button onClick={() => deleteHandler(id)}>X</button>
      </div>
    </div>
  );
}

export default Pet;
