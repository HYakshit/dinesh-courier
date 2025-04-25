import Input from "./Input";

const Shipnow = () => {
  return (
    <section className="view" id="shipNow">
      <div className="heading text-center">
        <h2>Enter details to ship parcel</h2>
      </div>
      <div className="row justify-content-center">
        {/* National */}
        <div className="col-12 col-md-6 col-lg-6">
          <div className="sub-heading text-center">
            <i className="fa-solid fa-location-dot"></i>
            <h4>National</h4>
          </div>
          <div className="form-class Name">
            <form
              action="https://formsubmit.co/superandsafecourier@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="National Courier" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="mb-3">
                <Input
                  title="Enter Name"
                  type="text"
                  maxLength={20}
                  name="Name"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Your Phone Number"
                  type="number"
                  maxLength={15}
                  name="phone number"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Parcel Origin"
                  type="text"
                  maxLength={20}
                  name="Parcel origin"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Parcel Destination"
                  type="text"
                  maxLength={20}
                  name="Parcel destination"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Parcel Weight in kg"
                  type="number"
                  maxLength={10}
                  name="Parcel weight"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn">
                  Submit <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* International */}
        <div className="col-12 mobile-margin col-md-6 col-lg-6">
          <div className="sub-heading text-center">
            <i className="fa-solid fa-globe"></i>
            <h4>International</h4>
          </div>
          <div className="form-class">
            <form
              action="https://formsubmit.co/superandsafecourier@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="International Courier"
              />
              <input type="hidden" name="_captcha" value="false" />
              <div className="mb-3">
                <Input
                  title="Enter Name"
                  type="text"
                  maxLength={20}
                  name="Name"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Your Phone Number"
                  type="number"
                  maxLength={15}
                  name="phone number"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Parcel Origin"
                  type="text"
                  maxLength={20}
                  name="Parcel origin"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Destination Country"
                  type="text"
                  maxLength={20}
                  name="Parcel destination"
                />
              </div>
              <div className="mb-3">
                <Input
                  title="Parcel Weight in kg"
                  type="number"
                  maxLength={20}
                  name="Parcel weight"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn">
                  Submit <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shipnow;
