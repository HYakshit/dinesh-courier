const Footer = () => {
  return (
    <section className="footer" id="footer">
      <footer className="bg-dark text-white text-lg-start">
        <div className="container p-4">
          {/* Company Info */}
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-md-0">
              <h5 className="text-uppercase heading">Dinesh Courier</h5>
              <p>
                Trusted courier services for over 22 years, providing domestic
                and international shipping with precision and care.
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 hover-effect col-md-6 mb-md-0">
              <h5 className="text-uppercase heading">Contact Us</h5>
              <ul className="list-unstyled ">
                <li>
                  <a
                    href="tel:+919888616881"
                    className="text-white d-flex align-items-center text-decoration-none"
                  >
                    <i className="fa fa-phone me-1"></i> +91 9877049989
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:superandsafecourier@gmail.com"
                    className="text-white d-flex align-items-center text-decoration-none"
                  >
                    <i className="fa fa-envelope me-1"></i>
                    superandsafecourier@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-lg-4 hover-effect col-md-12 mb-md-0">
              <h5 className="text-uppercase heading">Follow Us</h5>
              <div>
                <a href="https://wa.me/9877049989" className="text-white  me-3">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
              <div>
                <a
                  className="developer d-flex align-items-center text-white text-decoration-none"
                  href="https://akshit.info/"
                  target="_blank"
                >
                  Contact Developer
                  <i className="fa-solid ms-2 fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2025 Dinesh Courier | All Rights Reserved
        </div>
      </footer>
    </section>
  );
};
export default Footer;
