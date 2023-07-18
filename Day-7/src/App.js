import Log from './Pages/Login'; 
import { SocialIcon } from 'react-social-icons';
import signup from './Pages/Signup';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Hom from './Components/home';
import Mar from './Components/marketing';
import Abo from './Components/about';
import Sports from './Components/sports';
import Tech from './Components/technology';
import Enter from './Components/entertainment';
import Poli from './Components/politics';
import Pro from './Components/profile';
import { useLocation } from 'react-router-dom';
import Nav from './pagebars/nav';
import Side from './pagebars/sidebar';
import Footer from './pagebars/footer';
const Fix =()=>{
const location = useLocation();
if(location.pathname!='/' && location.pathname!='/signup')
  {
    return(
      <>
        <Nav/>
        
      </>
    )
 }

  
}
function App() {
  return (
    <div className='App'>
      <Router>
        <Fix/>
        <Routes>
          <Route path="/" Component={Log} />
          <Route path="/signup" Component={signup} />
          <Route path="/h" Component={Hom} />
          <Route path="/profile" Component={Pro} />
          <Route path="/market" Component={Mar} />
          <Route path="/about" Component={Abo} />
          <Route path="/techno" Component={Tech} />
          <Route path="/enter" Component={Enter} />
          <Route path="/poli" Component={Poli} />
          <Route path="/sports" Component={Sports} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
