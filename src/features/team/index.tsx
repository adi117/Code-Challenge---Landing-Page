"use client";

import fetchUser from "./hooks/use-user";
import { useEffect, useState } from "react";
import { UserProps } from "@/type/user";
import UserCard from "./component/user-card";

const UserList = () => {

  const [members, setMember] = useState<UserProps[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUser();
      setMember(data);
    }
    getUsers();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-11 md:gap-22">
      {members.map((member) => (
        <div key={member.id}>
          <UserCard
          id={member.id}
          name={member.name}
          imageUrl={member.imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default UserList;