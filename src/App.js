import './App.css';
import logo from './logo.png';
import Typewriter from "typewriter-effect";

function App() {
  const things = [
    'Websites', 
    'Applications',
    'Content',
    'Security',
    'Scripts',
    'Artificial Intelligence',
    'Blockchain'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>Cleverly Codes...</h1>

        <Typewriter
          options={{
            strings: things,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
          }}
        />
      </header>
    </div>
  );
}

export default App;
