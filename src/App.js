import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Header from './Components/Header';
import Landing from './Components/Landing';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
