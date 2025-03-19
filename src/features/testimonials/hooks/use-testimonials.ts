const fetchTestimonials = async () => {
  try {
    const response = await fetch("https://json-server-code-challenge.vercel.app/testimonials");

    if (!response.ok) {
      throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchTestimonials;
