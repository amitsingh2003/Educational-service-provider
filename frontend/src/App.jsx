import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ScholarsmeritAbout from "./pages/About";
import LeadershipTeamSection from "./components/LeadershipTeamSection";
import ContactSection from "./components/Contact";
import NewsletterSection from "./components/NewsletterSection";
import CareersPage from "./pages/RecruitmentWebsite ";
import MathLabWebsite from "./components/MathLabWebsite ";
import SM360Platform from "./components/SM360Platform ";
import TaskOneWebsite from "./components/TaskOneWebsite ";
import CloudOneWebsite from "./components/CloudOneWebsite ";

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
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/sm360" element={<SM360Platform />} />
        <Route path="/mathlab" element={<MathLabWebsite />} />
         <Route path="/taskone" element={<TaskOneWebsite />} />
           <Route path="/cloudone" element={<CloudOneWebsite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
