import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Shipnow from "./components/ShipNow";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const navdata = [
    { name: "About US", link: "about" },
    { name: "Contact US", link: "contact" },
    { name: "ShipNow", link: "shipnow" },
    { name: "FAQ's", link: "faq" },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar navlist={navdata} />
      <Main></Main>
      <About></About>
      <Contact></Contact>
      <Shipnow></Shipnow>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
}

export default App;
