import axios from "axios";

const fetchCompanyData = async () => {
  try {
    const response = await axios.get("https://json-server-code-challenge.vercel.app/company");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchCompanyData;