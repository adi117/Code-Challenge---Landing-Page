"use client";

import { useState, useEffect } from "react";
import { Property } from "@/type/properties";
import axios from "axios";

interface BookingProps {
  name: string;
  email: string;
  phoneNumber: string;
  properties: Property;
}

const useBooking= () => {
  const [bookingList, setBookingList] = useState<BookingProps[]>([]);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get("https://json-server-code-challenge.vercel.app/booking");
        setBookingList(Array.isArray(response.data) ?  response.data : []);
      } catch (error) {
        setError(error);
        setBookingList([]);
      }
    };

    fetchBooking();
  },[]);

  const addBooking = async (bookingData: BookingProps) => {
    try {
      const response = await axios.post("https://json-server-code-challenge.vercel.app/booking", bookingData, {
        headers: { 'Content-Type' : 'application/json'
        }});
        setBookingList((currentBooking) => [...currentBooking, response.data]);
      } catch (error) {
        setError(error);
      }
    }
  return {bookingList, error, addBooking};
};

export default useBooking;