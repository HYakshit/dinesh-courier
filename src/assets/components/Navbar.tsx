import React, { useState } from "react";

interface NavbarProps {
  navlist: string[];
}

const Navbar: React.FC<NavbarProps> = ({ navlist }) => {
  const navlinks: Array<string> = navlist;
  return (
    <header>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      >
        <div className="container">
          <a className="navbar-brand" href="#main">
            Dinesh Courier
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {navlinks.map((link, index) => (
                <a key={index} className="nav-link" href={`#${link}`}>
                  {link}
                </a>
              ))}
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="#aboutUs"
              >
                About US
              </a>
              <a className="nav-link" href="#contactUs">
                Contact Us
              </a>
              <a className="nav-link" href="#shipNow">
                Ship Now
              </a>
              <a className="nav-link" href="#FAQs">
                FAQ's
              </a> */}
              {/* <a className="nav-link contact" >Contact: +91 9877049989</a> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
