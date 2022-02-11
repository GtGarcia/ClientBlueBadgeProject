import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Home = (props) => {
    return ( 
        <div>
            <nav>
            <h1>This is the Home Page!</h1>
            <Link to ='/login'>Login</Link>
            <br />
            <br />
            <Link to ='/register'>SignUp</Link>
            </nav>
        </div>
     );
}
 
export default Home;