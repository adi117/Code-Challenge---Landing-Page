import axios from "axios";

const fetchFQAData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/fqa");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchFQAData;