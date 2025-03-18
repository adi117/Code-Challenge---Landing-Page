import axios from "axios";

const fetchSolutionData = async () => {
  try {
    const response = await axios.get("https://code-challenge-landing-page.vercel.app/solution");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchSolutionData;