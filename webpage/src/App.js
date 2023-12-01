import './App.css';

import Header from './components/Header';
import Greeter from './components/Greeter'
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import Projects from './components/pages/Projects';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <div className="Home">
        <Header/>
        <Greeter/>
        <Container fluid='lg'>
          <Row>
            <Col>
              <Item1/>
            </Col>

            <Col>
              <Item2/>
            </Col>

            <Col>
              <Item3/>
            </Col>
          </Row>
        </Container>
        </div>
      <div className="projects">
      <Projects/>
    </div>
    </div>

  );
}

export default App;
