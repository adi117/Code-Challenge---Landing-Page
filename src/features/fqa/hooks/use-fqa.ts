import axios from "axios";

const fetchFQAData = async () => {
  try {
    const response = await axios.get("https://server-json-landing-page-a7jxhkb8m.vercel.app/fqa");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchFQAData;