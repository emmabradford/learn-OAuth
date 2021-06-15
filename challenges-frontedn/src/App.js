import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dasboard</h1>
      </header>
      <div className="App-body">
        <span>
          <LoginButton />
          <LogoutBuutton />
        </span>
        <Route path="/challenges" component={Challenges} />
      </div>
    </div>
  );
}

export default App;
