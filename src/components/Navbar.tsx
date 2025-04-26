import React, { useEffect } from "react";

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

  // Set up handlers for navbar collapse
  useEffect(() => {
    // Function to hide navbar
    const hideNavbar = () => {
      const navbar = document.querySelector(".navbar-collapse") as HTMLElement;
      if (navbar && navbar.classList.contains("show")) {
        // Use Bootstrap's built-in data-bs-toggle functionality
        const navbarToggler = document.querySelector(
          ".navbar-toggler"
        ) as HTMLButtonElement;
        if (navbarToggler) {
          navbarToggler.click();
        }
      }
    };

    // Close navbar when clicking anywhere on the document
    document.addEventListener("click", (event) => {
      const navbar = document.getElementById("navbar");
      if (navbar && !navbar.contains(event.target as Node)) {
        hideNavbar();
      }
    });

    // Close navbar when clicking nav links
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", hideNavbar);
    });

    return () => {
      // Clean up
      document.removeEventListener("click", hideNavbar);
      navLinks.forEach((link) => {
        link.removeEventListener("click", hideNavbar);
      });
    };
  }, []);

  return (
    <header>
      <nav
        id="navbar"
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      >
        <div className="container">
          <a
            className="navbar-brand nav-link"
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
            aria-expanded="false"
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
