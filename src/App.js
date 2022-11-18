import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <h1>Math Magicians</h1>
            <ul className="links">
              <li>
                <Link to="/home">Home</Link>
              </li>
              |
              <li>
                <Link to="/calculator">Calculator</Link>
              </li>
              |
              <li>
                <Link to="/quote">Quote</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
