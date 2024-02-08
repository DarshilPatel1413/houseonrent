
import './Home.css';
// import Signin from './Signin';
import { Link } from "react-router-dom";


const Home = (event) => {




    return (
        <div>


            <div className="home-text">
           
                
                <h1>Find your next <br />perfect place to <br /> live.  </h1>
                <Link  className="btn btn-info" to="/Signin">Sign In</Link>

            </div>


            <p className="mq">Visit our website for best experince and pocket-friendly houses</p>

        </div>
    );
}

export default Home;