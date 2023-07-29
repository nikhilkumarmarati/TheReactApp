import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page not found</p>
            <Link to="/TheReactApp">Back to homepage...</Link>
        </div>
    );
}
 
export default NotFound;