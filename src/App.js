import React, { useState } from "react";
import logo from "./assets/github.png";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((userResposne) => setUserData(userResposne));
  };

  //console.log(userData);

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="GitHub User"
              className="form-contropl"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (
          <img
            src={logo}
            className="responsive rounded-circle"
            alt="Logomarca Github"
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt="Logomarca Github"
              height="200px"
            />            
            <h1 className="pt-5">
              <a href={userData.html_url} target="_new">
                {userData.name}
              </a>
            </h1>
            <span>ID: {userData.id}</span>
            <h3>{userData.bio}</h3>
            <p>
              <a
                href="https://www.youtube.com/"
                target="_new"
                className="text-info"
              >
                 {userData.location}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
