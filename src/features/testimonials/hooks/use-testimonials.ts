import axios from "axios";

const fetchTestimonials = async () => {
  try {
    const response = await axios.get("https://server-json-landing-page-a7jxhkb8m.vercel.app/testimonials");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchTestimonials;