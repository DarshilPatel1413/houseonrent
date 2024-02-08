import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">DP'S STATES</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/about">About</Link>
        <Link className="nav-link active" to="/sales">Sales</Link>
        <Link className="nav-link active" to="/Properties">Properties</Link>
        <Link  className="btn btn-info" to="/Login">Log In</Link>
        
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Header;