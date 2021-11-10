
import { Outlet} from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "red" : "blue"}  to='/contatos'>Contatos</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
