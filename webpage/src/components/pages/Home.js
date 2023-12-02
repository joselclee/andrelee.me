import '../Header.css'
import Header from '../Header'

const Home = () => {
  return (
    <div className="Home">
        <Header/>
        <br/>
        <div className="custom">Hi I'm Andre. </div>
        <div>
            <img src="./components/assets/andre.gif"></img>
        </div>
    </div>
  )
}

export default Home