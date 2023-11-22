import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import "./Navigation.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Navbar(scrollToTop) {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [window.location.pathname]);

  return (
    <div>
      <nav className='navbar navbar-expand-lg fix-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            WAVY WORDS
          </a>
          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabIndex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            style={{
              width: "100%",
              height: "70%",
              overflowY: "scroll",
              overflow: "hidden",
            }}>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                WAVY WORDS
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <div className='flexnav'>
                <span className='navlinks'>
                  <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li
                      className='nav-item'
                      data-bs-dismiss='offcanvas'
                      aria-label='Close'>
                      <NavLink
                        className='nav-link'
                        aria-current='page'
                        to='/'
                        onClick={scrollToTop}>
                        Home
                      </NavLink>
                    </li>
                    <li
                      className='nav-item'
                      data-bs-dismiss='offcanvas'
                      aria-label='Close'>
                      <NavLink
                        className='nav-link'
                        to='/store/'
                        onClick={scrollToTop}>
                        Books
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        to='/stories/'
                        tabIndex='-1'
                        aria-disabled='true'
                        onClick={scrollToTop}>
                        Stories
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        to='store/wishlist/'
                        tabIndex='-1'
                        aria-disabled='true'
                        onClick={scrollToTop}>
                        Wish List
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        className='nav-link'
                        to='/contactus'
                        tabIndex='-1'
                        aria-disabled='true'
                        onClick={scrollToTop}>
                        Contact Us
                      </NavLink>
                    </li>
                    <li className='nav-item-lang' style={{ float: "right" }}>
                      <span className='lang'>
                        <ul className='navbar-nav ms-auto'>
                          <li
                            className='nav-item dropdown m-0 b-0'
                            id='landropdown'>
                            <a
                              className='nav-link dropdown-toggle globe'
                              href='/'
                              id='navbarDropdown'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                className='bi bi-globe'
                                viewBox='0 0 16 16'>
                                <path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z' />
                              </svg>
                            </a>
                            <div
                              className='dropdown-menu lang'
                              aria-labelledby='navbarDropdown'
                              style={{}}>
                              <ul>
                                <li>
                                  <a
                                    className='dropdown-item'
                                    href='/'
                                    // onClick={() => changeLocale("en")}
                                  >
                                    English
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='dropdown-item'
                                    href='/'
                                    // onClick={() to changeLocale("ar")}
                                  >
                                    العربية
                                  </a>
                                </li>
                                <li>
                                  <a className='dropdown-item' href='/'>
                                    Français
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li>
                      {user && (
                        <div>
                          <button onClick={handleLogout}>Logout</button>
                        </div>
                      )}
                      {!user && (
                        <div>
                          <Link to='/login'>
                            <button>Login</button>
                          </Link>
                        </div>
                      )}
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
