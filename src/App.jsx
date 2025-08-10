import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
// import BlogPage from "./pages/BlogPage";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import Services from "./pages/Services";
// import SingleBlogPage from "./pages/SingleBlogPage";
// import TeamPage from "./pages/TeamPage";
import TermsPage from "./pages/TermsPage";
export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/blog/:id" element={<SingleBlogPage />} /> */}
          {/* <Route path="team" element={<TeamPage />} /> */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          {/* Add more routes as needed */}

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
