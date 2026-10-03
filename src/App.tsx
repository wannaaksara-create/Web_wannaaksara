import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/karya" element={<Portfolio />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="grain min-h-screen">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </HashRouter>
  );
}
