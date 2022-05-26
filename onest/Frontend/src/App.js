import logo from './logo.svg';
import './App.css';
import InputUEN from './components/inputUEN';
import InputWeather from './components/inputWeather';

function App() {
  return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to OneST
          </p>
          <InputUEN></InputUEN>
          <InputWeather></InputWeather>
        </header>
      </div>
      
  );
};

export default App;
