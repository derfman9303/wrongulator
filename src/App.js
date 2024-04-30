import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator';
import Header from './Header';

function App() {
  return (
    <div className="App">
        <div className="flexbox column">
            <Header />
            <div className="flexbox">
                <Calculator />
            </div>
        </div>
    </div>
  );
}

export default App;
