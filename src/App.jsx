import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import Home from './pages/Home';
import Projects from './pages/Projects';
import WorkHistory from './pages/WorkHistory';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CaseStudy from './pages/CaseStudy';
import usePageView from './hooks/usePageView';

function PageViewTracker() {
  usePageView();
  return null;
}

export default function App() {
  return (
    <Router>
      <PageViewTracker />
      <div className="min-h-screen bg-charcoal flex flex-col">
        <Navbar />

        {/* Two-column layout: sticky sidebar + scrollable content */}
        <div className="flex-1 max-w-[1140px] mx-auto w-full px-5 md:px-8 lg:px-10 flex gap-10 lg:gap-[100px] pb-8">
          {/* Left — Sticky Profile Card (desktop only) */}
          <aside className="hidden lg:block w-[344px] flex-shrink-0">
            <div className="sticky top-[100px]">
              <ProfileCard />
            </div>
          </aside>

          {/* Right — Scrollable page content */}
          <main className="flex-1 min-w-0 pt-8 lg:pt-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<CaseStudy />} />
                <Route path="/work" element={<WorkHistory />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
