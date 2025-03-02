import ProjetoCard from '../components/ProjetoCard';
import { projetos } from '../data/projetos';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-2">Projetos</h1>
      <p className="text-gray-400 mb-8">Explore nossa coleção de projetos práticos para desenvolvedores</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </div>
  );
};

export default Projects; 