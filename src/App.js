import Navbar from "./components/Navbar";
import HeroFold from "./components/HeroFold";
import WhyFold from "./components/WhyFold";
import ServicesFold from "./components/ServicesFold";
import OurClientsFold from "./components/OurClientsFold";
import OurNetwork from "./components/OurNetwork";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-[#0e0c13] h-100vh">
      <Navbar />
      <HeroFold />
      <WhyFold />
      <div className="relative">
        <ServicesFold />
        {/* <div
          className="absolute h-36 w-36 -right-1 -top-28"
          style={{
            // border-radius: "1115.204px",
            background:
              "radial-gradient(144.11% 103.06% at 50% 50%, rgb(231,89,22, 1) 0%,  rgb(231,89,22, 01) 45.67%)",
            filter: "blur(180px)",
          }}
        ></div> */}
      </div>
      <div className="relative">
        <OurNetwork />
        <div
          className="absolute h-36 w-36 -left-1 top-20"
          style={{
            // border-radius: "1115.204px",
            background:
              "radial-gradient(144.11% 103.06% at 50% 50%, rgb(231,89,22, 1) 0%,  rgb(231,89,22, 01) 45.67%)",
            filter: "blur(160px)",
          }}
        ></div>
      </div>
      <OurClientsFold />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
