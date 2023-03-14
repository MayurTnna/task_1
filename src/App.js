
import './App.css';
import Aboutus from './components/Aboutus';
import Mendleson from './components/Mendleson';
import '../src/assets/scss/Main.scss'
import Services from './components/Services';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Mendleson/>
      {/* <Navbar/> */}
      <Aboutus/>
      <Services/>
      
    </div>
  );
}

export default App;
