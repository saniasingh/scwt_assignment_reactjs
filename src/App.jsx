import "./App.css";
import { NavBar } from "./components/NavbarComponent/Navbar.jsx";
import { Footer } from "./components/FooterComponent/Footer.jsx";
// import { HeroSection } from "./components/HeroSectionComponent/HeroSection.jsx";
import { ReachOutComponent } from "./components/ReachOutComponent/ReachOutComponent.jsx";
import { HowItWorks } from "./components/HowItWorkComponent/HowItWorks.jsx";
// import { steps } from "./components/HowItWorkComponent/howItWorkData.json";
import { Customers } from "./components/CustomersComponent/customers.jsx";

function App() {
  return (
    <div>
      <NavBar />
      {/* <HeroSection /> */}
      {/* <HowItWorkcard data={steps} /> */}
      <HowItWorks />
      <Customers />
      <ReachOutComponent />
      <Footer />
    </div>
  );
}

export default App;
