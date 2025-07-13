import './Style.css';
import { Route, Routes, } from "react-router-dom";
import Home from './Home';
import About from './About';
import Coffee from './Coffee';
import Review from './Review';
import Blog from './Blog';
import Contact from './Contact';
import Navbr from './Nav';
import Foot from './Foot';
import Sales from './Sales';
import Banner from './Banner';

function App() {
  return (
    <>
      <Navbr />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
