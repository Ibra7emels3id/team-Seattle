import React from 'react';
import { Box, Typography } from '@mui/material';
import './nav.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import FormN from './FormN';

export default function Discover() {
  return (
    <div className="nav-par">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img width="220px" src="/uploads/img/LOGO.png" alt="Logo" />
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
                  HOME
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US <ExpandMoreIcon className='color-g1' />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Ourpartners">
                      PUR partners
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/TeamS">
                      OurTeam
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Service">
                  SERVICE
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  OUR PROJECTS<ExpandMoreIcon className='color-g1' />
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Abudhabi">
                      ABU DHABI                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="login">
                      loginAdmin
                    </Link>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="#">
                      Sharjah                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ajman                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Umm Al Quwain                  </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ras Al Khaimah
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Fujairah
                    </a>
                  </li> */}



                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COMPANIES<ExpandMoreIcon className='color-g1' />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Mortgage">
                      JNJ MORTGAGE                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Spartan">
                      SPARTAN TOURISM
                    </Link>
                  </li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  MEDIA CENTER   <ExpandMoreIcon className='color-g1' />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/LatestNews">
                      BOLGE                  </Link>
                  </li>


                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT US<ExpandMoreIcon className='color-g1' />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Careers">
                      CAREERS                 </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Contactus">
                      CONTACT US
                    </Link>
                  </li>

                </ul>
              </li>
            </ul>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                width: "auto"
              }}
            >
              <a href="tel:+971502135701" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{ color: '#D6C48B', p: '10px', fontWeight: "bold" }}
                >
                  +971502135701
                </Typography>
              </a>
              <div className="click-button">
                <FormN />
              </div>

              <Typography style={{ margin: "20px" }} variant="body1" className="en-ar">
                <div style={{ position: 'relative', right: '-20px' }}>
                  العربيه
                </div>
              </Typography>
            </Box>
          </div>
        </div>
      </nav>
    </div>
  );
}
