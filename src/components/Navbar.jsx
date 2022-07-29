import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText, searchfilms}) => {
    const navigate = useNavigate();
    const updateSearchText = (e) => {
        navigate('/search');
        setSearchText(e);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">
                                Disabled
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchText}
                            onChange={(e) => updateSearchText(e.target.value)}
                        />

                        {/* <span className="btn btn-outline-success" type="submit" 
                        onClick={()=>updateSearchText(searchText)}>
                            Search
                        </span> */}
                        <span className="btn btn-outline-success" type="submit" 
                        onClick={()=>searchfilms(searchText)}>
                            Search
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
