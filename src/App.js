
import { Outlet} from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/contatos'>Contatos</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
