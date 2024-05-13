import Header from '../Header';
import Footer from '../Footer';
import Item1 from '../Item1';
import Item2 from '../Item2';
import Item3 from '../Item3';
import Item4 from '../Item4';
import Item5 from '../Item5';
import Item6 from '../Item6';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <div>
        <Header/>
        <br/>
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
        <br/>
        <Row>
          <Col>
            <Item4/>
          </Col>
            
          <Col>
            <Item5/>
          </Col>

          <Col>
            <Item6/>
          </Col>

        </Row>
      </Container>
      <br/>
      <Footer/>
    </div>
  )
}

export default Projects