import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/Navigationbar';
import Contact from './Components/Contact';
import contactcards from './Assets/data/Contactcards';
import Footer from './Components/Footer';
import Careers from './Components/Careers';
import News from './Components/News';
import Thinking from './Components/Thinking';
import thinkingdata from './Assets/data/Thinkingdata'
import datanews from './Assets/data/new'
import industries from './Assets/data/industries';
import allwork from './Assets/data/allwork';

import {

  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import aboutdata from './Assets/data/aboutdata';
import Work from './Components/Work';
import mywork from './Assets/data/workpage'
import Mainpage from './Components/Mainpage';
function App() {
  return (
   <>
   {/* <Navigationbar/> */}
   {/* <Contact/> */}
    {/* <Footer/> */}
    {/* <Careers/> */}
    {/* <Thinking/> */}





    <BrowserRouter>
      <Navigationbar />

        <Routes>
          <Route path="/thinking" element={<Thinking data={thinkingdata}/>} />
          <Route path="/contact" element={<Contact state = {contactcards} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News datanews={datanews}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutdata" element={<About data={aboutdata} />} />
          <Route path="/about" element={<About data={aboutdata} />} />
          <Route path="/work" element={<Work  work={mywork} />} />
          <Route path="/allwork" element={<Work  work={allwork} />} />
          <Route path="/industries" element={<Work work={industries}/>} />
          <Route path="/work" element={<Work />} />
          <Route path="/mainpage" element={<Mainpage datanews={datanews}/>} />
          <Route path="/mainpage" element={<Mainpage />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
























   
   </>
  );
}

export default App;
