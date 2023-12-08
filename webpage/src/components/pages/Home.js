import '../Header.css'
import Header from '../Header';
import Footer from '../Footer';
import Giffy from '../Giffy';
import { Container } from 'react-bootstrap';
import Featured from '../Featured';

const Home = () => {
  return (
    <div className="Home">
      <Container fluid>
        <Header/>
        <div>
            <Giffy/>
            <br/><br/>
        </div>
        <div className="home-container">
          <div className="med-text">
            favorite project!
            <br/>
          </div>
          <Featured/>
        </div>
      </Container>
      <Footer/>
      </div>

  )
}

export default Home