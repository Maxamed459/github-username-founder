import React from "react";

interface UserProps {
  name: string;
  age: number;
  email: string;
}

const User = ({ name, age, email }: UserProps) => {
  return (
    <div>
      <h1>
        Hello, i'm {name}, and my age is {age} here is my Email: {email}
      </h1>
    </div>
  );
};

export default User;
