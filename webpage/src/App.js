import './App.css';

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Hobbies from './components/pages/Hobbies';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Resume" element={<Resume/>}/>
          <Route path="/Hobbies" element={<Hobbies/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
