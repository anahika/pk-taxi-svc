import "./App.css";
import AboutUs from "./components/about-us/AboutUs";
import Landing from "./components/landing/Landing";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  return (
    <div>
      <Landing />
      <AboutUs />
      <ContactUs />
      <footer className="text-center text-black-50 p-3">
        {" "}
        <span>COPYRIGHT © 2023 TRAVEL THEORIZ - ALL RIGHTS RESERVED.</span>
      </footer>
    </div>
  );
}

export default App;
