import Header from '../Header';

const Resume = () => {
  return (
    <div className="Resume">
        <Header/>
        <iframe src="components/assets/current-resume.pdf" title="Resume" alt="resume" width="100%" height="100%"/>
    </div>
  );
};

export default Resume;
