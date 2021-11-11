
import { Outlet} from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav className="p-6 max-w-full text-center  bg-white shadow-md ">
        <NavLink className={({ isActive }) => isActive ? "text-red-500 mx-2" : "text-blue-500 mx-2"}  to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-red-500 mx-2" : "text-blue-500 mx-2"} id="link-contatos" to='/contatos'>Contatos</NavLink>
      </nav>
      <div className="max-w-full text-center mt-5">
        <Outlet />
      </div>
    </div>
  );
}



export default App;
