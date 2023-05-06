import AboutUs from "./components/about-us/AboutUs";
import Landing from "./components/landing/Landing";
import ContactUs from "./components/contact-us/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Error } from "./components/pages/Error";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/contact-us/" element={<ContactUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
