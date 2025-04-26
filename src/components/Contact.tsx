import Input from "./Input";

const Contact = () => {
  return (
    <section className="view contact bg-grey" id="contact">
      <div className="heading text-center">
        <h2>Locate US</h2>
      </div>
      <div className="row">
        <div className="map-area col-12 col-md-6 col-lg-6">
          <span className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3381.978292252778!2d75.410148!3d32.042779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b93aa977f99e9%3A0x31a94a7200616935!2sAnjani%20Courier%20Service!5e0!3m2!1sen!2sin!4v1728828334322!5m2!1sen!2sin"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="responsive-map"
            />
          </span>
          <span>
            <a
              className="btn"
              id="getmethere"
              href="https://www.google.com/maps/dir/31.6124396,74.8718894/Anjani+Courier+Service,+Civil+Line+Rd,+opp.+Rigali+Hotel,+Civil+Lines,+Gurdaspur,+Punjab+143521/@31.826291,74.8112091,10z/data=!3m1!4b1!4m18!1m7!3m6!1s0x391b93aa977f99e9:0x31a94a7200616935!2sAnjani+Courier+Service!8m2!3d32.0427789!4d75.4101483!16s%2Fg%2F11rkg0x_8r!4m9!1m1!4e1!1m5!1m1!1s0x391b93aa977f99e9:0x31a94a7200616935!2m2!1d75.4101116!2d32.0427644!3e0?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Get me there
            </a>
          </span>
        </div>
        <div className="mobile-margin col-12 col-md-6 col-lg-6">
          <div className="text-center">
            <h3 className="sub-heading">Contact Us</h3>
            <ul className="list-unstyled d-flex">
              <div>
                <li>
                  <a href="tel:+9877049989" className="text-decoration-none">
                    <i className="fa fa-phone me-1"></i>
                    +91 9877049989
                  </a>
                </li>
              </div>

              <li>
                <a
                  href="mailto:superandsafecourier@gmail.com"
                  className="text-decoration-none"
                >
                  <i className="fa fa-envelope me-1"></i>
                  superandsafecourier@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <h3>
              Civil Line Rd, opp. Rigali Hotel, Civil Lines, Gurdaspur, Punjab
              143521
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
