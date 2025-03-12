import './NavBar.css';
import logoImg from '/src/assets/logo1.jpeg'

function NavBar() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary px-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='imgLogo' src={logoImg} alt="" />
          </a>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-5">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-dark me-2">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
