import axios from "axios";

const fetchCompanyData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/company");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchCompanyData;