import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { getOne } from "./get";

export const deleteData = async (id) => {

    const { petName } = await getOne(id);

    const confirmed = window.confirm(`Are you sure you want to delete ${petName}'s appointment?`);

    if (!confirmed) return;

    const response = await axios.delete(`${API_URL}/appointments/${id}`);
    return response.data;
};