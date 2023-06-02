import React from "react";
import { useNavigate } from "react-router-dom";


function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-1 text-white header-section">
        <nav className="navbar navbar-expand-lg header_shadow">
          <div className="container-fluid">
            <a className="navbar-brand nav_color" href="/" alt="">
              <img
                src="https://static.wixstatic.com/media/035244_f6ec541c74484f0397ade5551118b193~mv2.png/v1/fill/w_62,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/035244_f6ec541c74484f0397ade5551118b193~mv2.png"
                alt="HOME"
              />
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  ABOUT US
                </li>
                {/* <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  FACILITIES
                </li>
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  ACADEMIC ZONE
                </li>
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  STUDENT ZONE
                </li>
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  RESULT
                </li>
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  MANDATORY PUBLIC DISCLOSURE
                </li>
                <li
                  className="nav-link nav_color"
                  onClick={() => navigate("/about")}
                >
                  MEDIA
                </li> */}

                {/* <li className="nav-item data_link">
                  <a
                    href="https://www.eastandwesthighschool.org/home"
                    alt=""
                    target="_blank"
                  >
                    <div className="nav-link nav_color ">Old School web</div>
                  </a>
                </li> */}

                {/* <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle nav_color"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    College
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="nav-item">
                      <a
                        className="dropdown-item"
                        href="#"
                        alt=""
                        //target="_blank"
                      >
                        Bachelor Degree
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="http://www.ignou.ac.in/"
                        alt=""
                        target="_blank"
                      >
                        Master Degree
                      </a>
                    </li>
                  </ul>
                </li> */}
                
              </ul>
              <button className="login-button"onClick={() => navigate("/login")} >Login</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
