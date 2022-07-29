import { Link } from "react-router-dom";
import Hero from "./Hero";

const PageNotFound = () => {
    return (
        <>
        <Hero text="404 Page not found"></Hero>
        <h2>Sorry this page does not exsist</h2>
        <Link className="nav-link" to="/">Back to Home page</Link>
        </>
    )
}

export default PageNotFound;