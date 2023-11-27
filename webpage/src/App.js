import './App.css';

import Header from './components/Header';
import Item from './components/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Row>
          <Col>
            <Item/>
          </Col>
          <Col>
            <Item/>
          </Col>
          <Col>
            <Item/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
