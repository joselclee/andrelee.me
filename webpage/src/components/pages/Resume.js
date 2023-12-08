import Header from '../Header';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';
import pdfLink from '../assets/current-resume.pdf';
const Resume = () => {
  return (
    <div className="Resume">
        <Header/>
          <Container fluid>
            <iframe src={pdfLink}
            title="Resume" alt="resume" width="100%" height="1000px"/>
          </Container>
          <br/>
          <Footer/>       
    </div>
  );
};

export default Resume;
