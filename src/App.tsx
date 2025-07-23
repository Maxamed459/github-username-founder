import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [user, setUser] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setUser(data);
    console.log(user);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter the username"
          value={username}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Search User
        </button>
      </form>
      {user && (
        <div className="user">
          <div className="user-info">
            <img
              src={user.avatar_url}
              alt={`${user.name}'s avatar`}
              className="img"
            />
            <div>
              <p>{user.login || "not provided"}</p>
              <br />
              <p>{user.bio || "No bio available."}</p>
            </div>
          </div>

          <p>Location: {user.location || "Not specified."}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}
    </div>
  );
};

export default App;
