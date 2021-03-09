import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div>
    <div className="App">
      <Nav />
      <Main />
    </div>
    <div className="musicControls">Music Controls</div>
    </div>
  );
}

export default App;
