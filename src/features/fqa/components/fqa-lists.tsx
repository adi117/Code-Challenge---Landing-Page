"use client";

import fetchFQAData from "../hooks/use-fqa";
import { useState, useEffect } from "react";
import Accordion from "./accordion";

interface FQAProps {
  id: number;
  question: string;
  answer: string;
}

const FQAList = () => {


  const [fqas, setFQA] = useState<FQAProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFQAData();
      setFQA(data);
    }
    getData()
  }, [])
  return (
    <div className="flex flex-col gap-5 w-full">
      {fqas.map((fqa) => (
        <div key={fqa.id}>
          <Accordion question={fqa.question} answer={fqa.answer}/>
        </div>
      ))}
    </div>
  )
};

export default FQAList;