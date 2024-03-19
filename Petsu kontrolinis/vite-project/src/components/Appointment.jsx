import { useState } from 'react';
import { useForm } from "react-hook-form";
import { postData } from '../Services/post';

function AddAppointment({ setUpdate }) {
    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const formSubmitHandler = async (values) => {
        await postData(values);
        setUpdate((update) => update + 1);
        reset();
        setShowForm(false);
    }

    const handleAddAppointment = () => {
        setShowForm(!showForm);
    };


    return (
        <div className='appointment'>
            <button className='btn' onClick={handleAddAppointment}>
                {showForm ? '+ Add Appointment' : '+ Add Appointment'}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit(formSubmitHandler)}>
                    <div className="add-appointment">
                        <div>
                            <label className='pet' htmlFor="pet">Pet Name </label>
                            <input type="text" id="petname" placeholder="Pet Name" {...register('petName', {
                                required: "Pet name is required",
                            })} />
                            <div className='error'>{errors.petName?.message}</div>
                        </div>
                        <div>
                            <label className='pet' htmlFor="petowner">Pet Owner</label>
                            <input type="text" id="petowner" placeholder="Pet Owner" {...register('petOwner', {
                                required: "Pet owner name is required",
                            })} />
                            <div className='error'>{errors.petOwner?.message}</div>
                        </div>
                        <div>
                            <label className='date' htmlFor="date">Date</label>
                            <input type="date" id="date" placeholder="Date" {...register('date', {
                                required: "Date is required",
                            })} />
                            <div className='error'>{errors.date?.message}</div>
                        </div>
                        <div>
                            <label className='notes' htmlFor="aptnotes">Apt. Notes</label>
                            <textarea name="aptnotes" id="aptnotes" placeholder='Appointment Notes' {...register('aptNotes', {
                                required: "Appointment notes is required",
                            })} />
                            <div className='error'>{errors.aptNotes?.message}</div>
                        </div>
                        <input className='add' type="submit" value="Add Appointment" />
                    </div>
                </form>
            )}
        </div>
    );
}

export default AddAppointment;