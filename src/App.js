import React, { useState } from "react";
import logo from "./assets/github.png";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState("");

  
  

    
    let dataInicioMenbro =  new Date(userData.created_at);    
    let dataultimoAcesso = new Date(userData.updated_at);
    const dataInicioFormatada = dataInicioMenbro.getDate() + "/"+ (dataInicioMenbro.getMonth() + 1) + "/"+ dataInicioMenbro.getFullYear()
    const dataUtimoAcessoFormatada = dataultimoAcesso.getDate() + "/"+ (dataultimoAcesso.getMonth() + 1)+ "/"+ dataultimoAcesso.getFullYear()
  


  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((response) => response.json())
      .then((userResposne) => setUserData(userResposne))
      
  };  

  return (
    <div className="fundo">
      <div className="container text-center">
        {/* <div className="container text-center display: flex" > */}
        <h1 className="py-5 text-uppercase">Github profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="search">
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
            <div className="perfil">
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
              <h5>{userData.bio}</h5>
              <p className="paragrafo"> Empresa: <strong>{!userData.company ? 'N/D': userData.company}</strong> </p>
              <p className="paragrafo"> Login: <strong> {userData.login} </strong></p>
              <p className="paragrafo"> Localização: <strong>{userData.location}</strong></p>
              <p className="paragrafo"> Membro desde: {dataInicioFormatada} </p>
              <p className="paragrafo"> Seguidores: {userData.followers} </p>
              <p className="paragrafo"> Seguindo: {userData.following} </p>
              <p className="paragrafo"> N Repositórios públicos: {userData.public_repos} </p>
              <p className="paragrafo"> Último acesso: {dataUtimoAcessoFormatada} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
