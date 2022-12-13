import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import  Contact  from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
//Pages
import Home from './pages/Home';
import DataMigration from "./components/navbaritems/DataMigration";
import Hosting from "./components/navbaritems/Hosting";
import UC from "./components/navbaritems/UC";
import Azure from "./components/navbaritems/Azure";
import GoogleCloud from "./components/navbaritems/GoogleCloud";
import GoogleEdu from "./components/navbaritems/GoogleEdu";
import AppDev from "./components/navbaritems/AppDev";
import VideoConference from "./components/navbaritems/VideoConference";
import WebDev from "./components/navbaritems/WebDev";
import SoftwareHardware from "./components/navbaritems/SoftwareHardware";
import POS from "./components/navbaritems/POS";
import ME from "./components/navbaritems/ME";




const App = () => {
  return (
    <div>
        <Router>
       <Navbar /> 
        <Routes>
          <Route path="/">
           <Route index element={<Home />} />
          
         
           <Route path="contact">
              <Route index element={<Contact />} />
              
            
            </Route> 



           <Route path="migration-sync">
              <Route index element={<DataMigration />} />           
           </Route> 

           <Route path="hosting">
              <Route index element={<Hosting />} />           
           </Route> 
           <Route path="uc">
              <Route index element={<UC />} />           
           </Route> 
           <Route path="microsoft-azure">
              <Route index element={<Azure />} />           
           </Route> 
           <Route path="google-cloud">
              <Route index element={<GoogleCloud />} />           
           </Route> 
           <Route path="google-edu">
              <Route index element={<GoogleEdu />} />           
           </Route> 
           <Route path="app-dev">
              <Route index element={<AppDev />} />           
           </Route> 
           <Route path="video-conferencing">
              <Route index element={<VideoConference />} />           
           </Route> 
           <Route path="webdev">
              <Route index element={<WebDev />} />           
           </Route> 
           <Route path="software-hardware">
              <Route index element={<SoftwareHardware />} />           
           </Route> 
           <Route path="pos">
              <Route index element={<POS />} />           
           </Route> 
           <Route path="me">
              <Route index element={<ME />} />           
           </Route> 

          </Route>
        </Routes>
        <Footer /> 
      </Router>
    </div>
  )
}

export default App