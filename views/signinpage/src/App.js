import './App.css';
import  Home  from './Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/welcome" element={<Welcome/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
