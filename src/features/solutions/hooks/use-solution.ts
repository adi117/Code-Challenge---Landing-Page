import axios from "axios";

const fetchSolutionData = async () => {
  try {
    const response = await axios.get("http://localhost:3001/solution");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchSolutionData;