import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category" component={Category} />
        </Switch>
      </main>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1> Home Componet </h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1> About Componet </h1>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <h1> Category Componet </h1>
    </div>
  );
};

export default App;
