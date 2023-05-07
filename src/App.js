import AboutUs from "./components/about-us/AboutUs";
import Landing from "./components/landing/Landing";
import ContactUs from "./components/contact-us/ContactUs";
import { HashRouter, Routes, Route } from 'react-router-dom';import { Error } from "./components/pages/Error";
import Header from "./components/header/Header";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
