"use client";

import fetchFAQData from "../hooks/use-faq";
import { useState, useEffect } from "react";
import Accordion from "./accordion";

interface FAQProps {
  id: number;
  question: string;
  answer: string;
}

const FAQList = () => {


  const [faqs, setFAQ] = useState<FAQProps[]>([]);

  useEffect(() => {    const getData = async () => {
      const data = await fetchFAQData();
      setFAQ(data);
    }
    getData()
  }, [])
  return (
    <div className="flex flex-col gap-5 w-full">
      {faqs.map((faq) => (
        <div key={faq.id}>
          <Accordion question={faq.question} answer={faq.answer}/>
        </div>
      ))}
    </div>
  )
};

export default FAQList;