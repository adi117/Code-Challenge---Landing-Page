import axios from "axios";

const fetchFAQData = async () => {
  try {
    const response = await axios.get("https://json-server-code-challenge.vercel.app/fqa");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchFAQData;