import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React App</h1>
            <div className="links">
                <Link to="/heReactApp">Home</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/signin">Sign in</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;