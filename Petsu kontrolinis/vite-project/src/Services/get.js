import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
 
export const getAllData =async()=>{
    const response = await axios.get(`${API_URL}/appointments`);
    return response.data;
};
 
export const getOne = async (id)=>{
    const response = await axios.get(`${API_URL}/appointments/${id}`);
    return response.data;
};