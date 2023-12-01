import Header from '../Header';
import Item1 from '../Item1';
import Item2 from '../Item2';
import Item3 from '../Item3';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <div>
        <Header/>
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
  )
}

export default Projects