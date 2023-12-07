import '../Header.css'
import Header from '../Header';
import Giffy from '../Giffy';
import Container from 'react-bootstrap/Container';
import Featured from '../Featured';

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Header/>
        <div>
            <Giffy/>
        </div>
        <div>
            <Featured/>
        </div>
        <div className="chatbot">
          chatbot should be here
        </div>
      </Container>
    </div>
  )
}

export default Home