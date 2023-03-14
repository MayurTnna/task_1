
import './App.css';
import Aboutus from './components/Aboutus';
import Mendleson from './components/Mendleson';
import '../src/assets/scss/Main.scss'
import Services from './components/Services';
import Ourteam from './components/Ourteam';
import Ourprojects from './components/Ourprojects';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Mendleson/>
      {/* <Navbar/> */}
      <Aboutus/>
      <Services/>
      <Ourteam/>
      <Ourprojects/>
      
    </div>
  );
}

export default App;
