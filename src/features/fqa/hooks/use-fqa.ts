import axios from "axios";

const fetchFQAData = async () => {
  try {
    const response = await axios.get("https://code-challenge-landing-page.vercel.app/fqa");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchFQAData;