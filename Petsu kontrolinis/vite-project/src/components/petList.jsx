
import Pet from './Pet';
function PetList({ pets, setUpdate }) {
    return (
        <>
            {pets.map((pet) => {
                return <Pet key={pet.id} pet={pet} setUpdate={setUpdate}/>
            })}
        </>
    )
}
export default PetList;