import axios from "axios";

const fetchTestimonials = async () => {
  try {
    const response = await axios.get("https://code-challenge-landing-page.vercel.app/testimonials");
    return response.data;
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchTestimonials;