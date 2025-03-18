import axios from "axios";

const fetchSolutionData = async () => {
  try {
    const response = await axios.get("https://server-json-landing-page-a7jxhkb8m.vercel.app/solution");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchSolutionData;