import './App.css';

import Header from './components/Header';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <div className="Home">
        <Header/>
        <Projects/>
      </div> */}

      {/*Testing*/}

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </Router>

    </div>

  );
}

export default App;
