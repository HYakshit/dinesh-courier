import Card from "./Card";

// Using require for image imports to avoid TypeScript errors
const FastDeliveryImg = new URL('../assets/images/fastDilivery.webp', import.meta.url).href;
const PackagingImg = new URL('../assets/images/parcel-packing.webp', import.meta.url).href;
const WorldMapImg = new URL('../assets/images/worldmap.webp', import.meta.url).href;
const ExperienceImg = new URL('../assets/images/22+exp.webp', import.meta.url).href;

const About = () => {
  return (
    <div>
      <section className="view aboutUs" id="about">
        <div className="heading text-center">
          <h2>We meet your needs for</h2>
        </div>
        <div className="about-row h-100">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-3">
            <Card
              title="Fast Delivery"
              description="We ensure quick and reliable delivery, getting your packages to the destination on time, every time."
              src={FastDeliveryImg}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <Card
              title="Good Packaging"
              description="We take extra care in packaging your items securely to protect them during transit and ensure safe delivery."
              src={PackagingImg}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <Card
              title="International Service"
              description="Our global network enables you to send parcels to over 200 countries with seamless tracking and support."
              src={WorldMapImg}
            />
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <Card
              title="22+ Years Of Experience"
              description="With over two decades of expertise, we deliver trust, efficiency, and excellence in every shipment."
              src={ExperienceImg}
            />
          </div>
        </div>
        </div>
       
      </section>
    </div>
  );
};

export default About;
