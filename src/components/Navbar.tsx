import React, { useState } from "react";

interface NavLink {
  name: string;
  link: string;
}

interface NavbarProps {
  navlist: NavLink[];
}

const Navbar = ({ navlist }: NavbarProps) => {
  const navlinks: NavLink[] = navlist;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      >
        <div className="container">
          <a
            className="navbar-brand"
            href="#main"
            onClick={(e) => scrollToSection(e, "main")}
          >
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
                <a
                  key={index}
                  className="nav-link"
                  href={`#${link.link}`}
                  onClick={(e) => scrollToSection(e, link.link)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
