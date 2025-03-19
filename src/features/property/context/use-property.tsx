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
  categoryLists: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [categoryLists, setCategoryList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");


  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get("https://json-server-code-challenge.vercel.app/properties");
        setProperties(response.data);
        setLoading(false);
        
        const properties : PropertyProps[] = response.data;
        setProperties(properties);
        setCategoryList(["All",...new Set(properties.map((property: PropertyProps) => property.category))])
      } catch (error) {
        setError(error);
        setLoading(false);
        return [];
      }
    }
    fetchPropertyData();
  },[])

  return (
    <PropertyContext.Provider value={{properties, loading, error, selectedProperty, setSelectedProperty, categoryLists, selectedCategory, setSelectedCategory}}>
      {children}
    </PropertyContext.Provider>
  )
}

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) throw new Error("useProperties muse within PropertyProvider");
  return context;
}