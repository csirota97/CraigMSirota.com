import logo from './logo.svg';
import './App.css';
import './icons.css';
import './projects.css';
import Screen from './components/Screen';
import { HashRouter, Route, Routes } from "react-router-dom";

const showProjectParams = [[['My Projects', 0], ['Personal', 1]], 'ALVAN'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Screen defaultWindow={{}}/>} />
          <Route path="/about" element={<Screen defaultWindow={{about: true}} />} />
          <Route path="/contact" element={<Screen defaultWindow={{contact: true}} />} />
          <Route path="/resume" element={<Screen defaultWindow={{resume: true}} />} />
          <Route path="/projects" element={<Screen defaultWindow={{projects: true}} />} />
          <Route path="/projects/ALVAN" element={<Screen defaultWindow={{projects: true}} loadedProject={showProjectParams}/>} />
        </Routes>
      </HashRouter>
      </header>
    </div>
  );
}

export default App;
