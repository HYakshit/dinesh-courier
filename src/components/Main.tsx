import Button from "./Button";
import Input from "./Input";

const Main = () => {
  return (
    <section className="view main" id="main">
      <div className="row align-items-center">
        {/* form container */}
        <div className="col-12 form-1 col-lg-6">
          {/* form */}
          <div className="heading text-center">
            <h1>
              Get a call<span id="exclamation">!</span>
            </h1>
          </div>
          <div className="form-class">
            <form
              action="https://formsubmit.co/superandsafecourier@gmail.com"
              method="POST"
            >
              {/* submit success */}
              {/* <input type="hidden" name="_next" value="http://127.0.0.1:5500/"> */}
              {/* subject */}
              <input type="hidden" name="_subject" value="Lead" />
              {/* cc */}
              <input type="hidden" name="_cc" value="akshit62832@gmail.com" />
              <div className="mb-2">
                {/* capcha disable */}
                <input type="hidden" name="_captcha" value="false" />
                {/* name */}
                <Input
                  title="Enter Name"
                  name="Name"
                  type="text"
                  maxLength={20}
                />
                {/* number */}
                <Input
                  title="Enter Phone Number"
                  name="PhoneNumber"
                  type="number"
                  maxLength={13}
                />
                {/* parcel origin */}
                <Input
                  title="Parcel Origin"
                  name="ParcelOrign"
                  type="text"
                  maxLength={20}
                />
                {/* parcel destination */}
                <Input
                  title="Parcel Destination"
                  name="ParcelDestination"
                  type="text"
                  maxLength={20}
                />
              </div>
              <div className="text-center">
                <Button text="Submit" withplane={true}></Button>
              </div>
            </form>
          </div>
        </div>
        {/*intro container*/}
        <div className="col-12 col-lg-6">
          <p className="intro-text mobile-margin">
            We make sure your parcels reach their destination on time, every
            time. No matter the distance, we deliver with care and precision.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Main;
