export const getAllDataFiltered = async (filterBy, filterValue) => {
  const response = await axios.get(`${API_URL}/appointments`);
  const filteredData = response.data.filter((item) => {
    switch (filterBy) {
      case "petName":
        return item.petName === filterValue;
      case "petOwner":
        return item.petOwner === filterValue;
      case "date":
        return item.date === filterValue;
      case "aptNotes":
        return item.aptNotes === filterValue;
      default:
        return true;
    }
  });
  return filteredData;
};
