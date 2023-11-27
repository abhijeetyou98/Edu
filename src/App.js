import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar2 from './components/admin/Navbar2' ;
import Header2 from './components/admin/Header2';
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';


//import { FaSomeIcon } from 'react-icons/fa';
// Import  components/pages
import Dashboard from './pages/admin/Dashboard';
import NavigationBar from './pages/admin/NavigationBar';
import Announcements from './pages/admin/Announcements';
import PersonalisedGroupFacilitation from './pages/admin/PersonalisedGroupFacilitation';
import InternationalCompetitionHub from './pages/admin/International_Competition_Hub';
import BridgeTheGapProgram from './pages/admin/Bridge_The_Gap_Program';
// import SuccessStories from './pages/admin/SuccessStory/SuccessStories';
import IBDPResultsPage from './pages/admin/SuccessStory/IBDPResultsPage';
import AddNewIbdpResult from './pages/admin/SuccessStory/AddNewIbdpResult' ;
import Banner from './pages/admin/SuccessStory/Banner';
import IgcseResults from './pages/admin/SuccessStory/IgcseResults';
import MypResults from './pages/admin/SuccessStory/MypResults';
import CompetitionResult from './pages/admin/SuccessStory/CompetitionResult';

import Registration from './pages/admin/Registration';
import AboutUs from './pages/admin/AboutUs';
import Contact from './pages/admin/Contact';
import WhyUs from './pages/admin/WhyUs';
import Settings from './pages/admin/Settings';
import Footer from './pages/admin/Footer';
import Content from './pages/admin/Content';

   
    function App() {
      return (
        <>
        <Router>
          <div className="App">
          
            <Header2/>
          
            <Navbar2/>
            <Content>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/navigationBar" element={<NavigationBar/>} />
              <Route path="/announcements" element={<Announcements/>} />
              <Route path="/personalised" element={<PersonalisedGroupFacilitation/>} />
              <Route path="/international" element={<InternationalCompetitionHub/>} />
              <Route path="/bridge" element={<BridgeTheGapProgram/>} />
              <Route path="/successstories" element={<Banner/>} />
              <Route path="/registration" element={<Registration/>} />
              <Route path="/about" element={<AboutUs/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/whyus" element={<WhyUs/>} />
              <Route path="/setting" element={<Settings/>} />
              <Route path="/footer" element={<Footer/>} />
              <Route path="/ibdpresults"element={<IBDPResultsPage/>}/>
            </Routes>

            <Routes>
              <Route path= "/Banner" element={<Banner/>}/>
              <Route path = "/IBDPResultsPage" element={<IBDPResultsPage/>}/>
              <Route path = "/AddNewIbdpResult" element={<AddNewIbdpResult/>}/>
              <Route path="/IgcseResults" element={<IgcseResults/>}/>
              <Route path="/MypResults" element={<MypResults/>}/>
              <Route path="/CompetitionResult" element={<CompetitionResult/>}/>
            </Routes>
            
            </Content>
            </div>
        </Router>
     
        
        </>
      );
    }
    
    


export default App;
