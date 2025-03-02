import { Code, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ isFixed = false }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-400' : '';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`bg-[#1E1E1E] text-gray-300 shadow-lg w-full z-50 ${isFixed ? 'fixed top-0' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Code size={28} className="mr-2 text-blue-400" />
          <Link to="/" className="text-xl font-bold text-white">DevProjetos</Link>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className={`hover:text-blue-400 transition ${isActive('/')}`}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/projetos" className={`hover:text-blue-400 transition ${isActive('/projetos')}`}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/desafios" className={`hover:text-blue-400 transition ${isActive('/desafios')}`}>
                Desafios
              </Link>
            </li>
            <li>
              <Link to="/comunidade" className={`hover:text-blue-400 transition ${isActive('/comunidade')}`}>
                Comunidade
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-2">
                <User size={20} className="text-blue-400" />
                <span className="text-gray-300">{user?.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 text-gray-300 border border-gray-600 rounded-md hover:bg-gray-800 hover:border-blue-400 transition"
              >
                Sair
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;