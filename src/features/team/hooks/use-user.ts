"use client";

import axios from "axios";
import { UserProps } from "@/type/user";

interface APIResponse {
  results: {
    name: {
      first: string;
      last: string;
    };
    picture: {
      large: string;
    };
  }[];
}

const fetchUser = async (): Promise<UserProps[]> => {
  try {
    const response = await axios.get<APIResponse>("https://randomuser.me/api/?results=10");
    return response.data.results.map((user, index) => ({
      id: index,
      name: `${user.name.first} ${user.name.last}`,
      imageUrl: user.picture.large
    }));
  } catch(error) {
    console.error(error);
    return [];
  }
}

export default fetchUser;