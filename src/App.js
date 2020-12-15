import './App.css'

function App() {
  return (
    <div className="App">
      <div className="appBody">
        <h1 className="scrollHeading">ETHOS</h1>
        <div className="content">
          <p>
            Dear "so and so",
          </p>
          <br></br>
          <p>
            Welcome to our site. We are Ethos, a creative studio
            ambitious to take dull websites and transform them into
            functional, fun and easy to use works of art. We believe
            this is the future of web-design.
          </p>
          <h2>Our Team</h2>
          <div className="teamContainer">
            <h3>Theo</h3>
            <h3>Amy</h3>
            <h3>Eli</h3>
          </div>
          <h2>Our Work</h2>
          <div className="workContainer"></div>
          <h2>Our Services - Get in touch!</h2>
          <div>
            <form>
              <div>
                <label>Name: </label>
                <input/>
              </div>
              <div>
                <label>Email: </label>
                <input/>
              </div>
              <div>
                <select>
                  <option>Service Equiry</option>
                  <option>Help</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <textarea></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
