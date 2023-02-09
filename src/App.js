// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Wall from './components/Wall/Wall'
import WallTypes from './components/WallTypes/WallTypes'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <WallTypes />
      <Wall />
    </div>
  );
}

export default App;
