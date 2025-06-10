import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ScholarsmeritAbout from "./pages/About";
import LeadershipTeamSection from "./components/LeadershipTeamSection";
import ContactSection from "./components/Contact";
import NewsletterSection from "./components/NewsletterSection";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ScholarsmeritAbout />} />
        <Route path="/leadership" element={<LeadershipTeamSection />} />
        <Route path="/news" element={<NewsletterSection />} />
        <Route path="/contact" element={<ContactSection />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
