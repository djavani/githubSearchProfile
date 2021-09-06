import "./App.css";
import logo from "./assets/github.png";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              placeholder="GitHub User"
              className="form-contropl"
              required
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
        <img
          src={logo}
          className="responsive rounded-circle"
          alt="Logomarca Github"
          height="200px"
        />
      </div>
      <h1 className="pt-5">
        <a href="https://github.com/djavani" target="_new">
          Djavani Gomes
        </a>
      </h1>
      <h3>Cataguases</h3>
      <p>
        <a href="https://www.youtube.com/" target="_new" className="text-info">
          https://www.youtube.com/
        </a>
      </p>
    </div>
  );
}

export default App;
