import '../Header.css'
import Header from '../Header';
import Giffy from '../Giffy';

const Home = () => {
  return (
    <div className="Home">
        <Header/>
        <br/>
        <div className="custom">Hi I'm Andre. </div>
        <div>
            <Giffy/>
        </div>
    </div>
  )
}

export default Home