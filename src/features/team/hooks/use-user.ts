"use client";

import axios from "axios";

const fetchUser = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=10");
    return response.data.results.map((user, index:number) => ({
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