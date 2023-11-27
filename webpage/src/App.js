import './App.css';

import Header from './components/Header';
import Greeter from './components/Greeter'
import Item1 from './components/Item1';
import Item2 from './components/Item2';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeter/>
      <Container>
        <Row>

          <Col>
            <Item1/>
          </Col>

          <Col>
            <Item2/>
          </Col>

          <Col>
            <Item1/>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
