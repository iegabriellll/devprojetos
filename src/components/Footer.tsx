import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          © {new Date().getFullYear()} DevProjetos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;