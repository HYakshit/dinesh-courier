import Navbar from "./assets/components/Navbar";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Shipnow from "./assets/components/ShipNow";
import Faq from "./assets/components/Faq";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar navlist={["About", "Contact", "Shipnow", "FAQ's"]} />
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
