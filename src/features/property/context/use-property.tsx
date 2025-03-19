"use client";

import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { ReactNode } from "react";

interface PropertyProps {
  id: number;
  name: string;
  location: string;
  price: number;
  discount: number;
  rating: number;
  category: string;
  image: string;
}

interface PropertyContextType {
  properties: PropertyProps[];
  loading: boolean;
  error: unknown;
  selectedProperty: PropertyProps | null;
  setSelectedProperty: (selectedProperty: PropertyProps) => void;
}
const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get("https://json-server-code-challenge.vercel.app/properties");
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        return [];
      }
    }
    fetchPropertyData();
  },[])

  return (
    <PropertyContext.Provider value={{properties, loading, error, selectedProperty, setSelectedProperty}}>
      {children}
    </PropertyContext.Provider>
  )
}

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) throw new Error("useProducts muse within PropertyProvider");
  return context;
}