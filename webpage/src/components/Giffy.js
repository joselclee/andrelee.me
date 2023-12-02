import vid from './assets/andre.mp4';
import './Header.css';

const Giffy = () => {
  return (
    <div>
      <br/><br/><br/>
        <video src={vid} alt="animated greeting" className="cropped-gif" muted playsInline autoPlay/>
    </div>
  )
}

export default Giffy