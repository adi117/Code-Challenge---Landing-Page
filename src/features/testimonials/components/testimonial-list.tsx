"use client";

import { useEffect, useState } from "react";
import fetchTestimonials from "../hooks/use-testimonials";
import { TestimonialsProps } from "@/type/testimonial";
import TestimonialCard from "./testimonial-card";

const TestimonialList = () => {

  const [testimonials, setTestimonials] = useState<TestimonialsProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    }
    getData()
  }, [])

  return (
    <div className="flex flex-col md:flex-row lg:flex gap-5">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id}>
          <TestimonialCard id={testimonial.id} name={testimonial.name} role={testimonial.role} message={testimonial.message} imageUrl={testimonial.imageUrl} />
        </div>
      ))}
    </div>
  )

}

export default TestimonialList;