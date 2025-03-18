import axios from "axios";

const fetchTestimonials = async () => {
  try {
    const response = await axios.get("http://localhost:3000/testimonials");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchTestimonials;