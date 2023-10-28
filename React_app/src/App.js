import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Updates from "./pages/Updates";
import QGISResourcesPage from './components/QGISResourcesPage';
import LearnMore from './components/LearnMore';
import Services from './pages/Services';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/qgis-resources" exact element={<QGISResourcesPage />} />
          <Route path="/blogs" exact element={<Blogs />}/>
          <Route path="/updates" excat element={<Updates />}/>
          <Route path="/learn-more" exact element={<LearnMore />}/>
          <Route path="/services" exact element={<Services />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
