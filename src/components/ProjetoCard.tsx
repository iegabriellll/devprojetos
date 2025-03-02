import { useState } from 'react';
import { Code, ChevronDown, ChevronUp, ExternalLink, Globe, Server, Smartphone, Monitor, Layers } from 'lucide-react';

// Defina a interface para o tipo 'Recurso'
interface Recurso {
  titulo: string;
  url: string;
}

// Defina a interface para o tipo 'Projeto'
interface Projeto {
  id: number;
  titulo: string;
  nivel: string;
  tipo: string;
  descricao: string;
  tecnologias: string[];
  dicas?: string[];
  recursos?: Recurso[];
}

const ProjetoCard = ({ projeto }: { projeto: Projeto }) => {
  const [expandido, setExpandido] = useState(false);

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'web':
        return <Globe className="text-white" />;
      case 'backend':
        return <Server className="text-white" />;
      case 'mobile':
        return <Smartphone className="text-white" />;
      case 'desktop':
        return <Monitor className="text-white" />;
      case 'fullstack':
        return <Layers className="text-white" />;
      default:
        return null;
    }
  };

  const getNivelClasse = (nivel: string) => {
    switch (nivel) {
      case 'junior':
        return 'bg-green-900/30 text-green-400 border-green-800/50';
      case 'pleno':
        return 'bg-blue-900/30 text-blue-400 border-blue-800/50';
      case 'senior':
        return 'bg-purple-900/30 text-purple-400 border-purple-800/50';
      default:
        return 'bg-gray-900/30 text-gray-400 border-gray-800/50';
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#1E1E1E]">
      <div className="h-48 bg-[#2A2A2A] flex items-center justify-center">
        <Code size={48} className="text-[#00BFFF]" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
        <p className="text-gray-400 mb-4">{projeto.descricao}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {projeto.tecnologias.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-[#2A2A2A] text-[#00BFFF]"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {getTipoIcon(projeto.tipo)}
            <span className={`px-3 py-1 rounded-full text-sm ${getNivelClasse(projeto.nivel)}`}>
              {projeto.nivel}
            </span>
            <span className="text-[#00BFFF] text-sm px-3 py-1 bg-[#2A2A2A] rounded-full border border-[#00BFFF]/20">
              {projeto.tipo}
            </span>
          </div>
          
          <button 
            className="p-2 rounded-full bg-[#2A2A2A] text-white hover:bg-gray-700 transition" 
            onClick={() => setExpandido(!expandido)}
          >
            {expandido ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        
        {expandido && (
          <div className="mt-4 border-t border-gray-700 pt-4">
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Dicas de Implementação</h4>
              <ul className="list-disc pl-5 text-gray-400">
                {projeto.dicas?.map((dica, index) => (
                  <li key={index}>{dica}</li>
                ))}
              </ul>
            </div>
            
            {projeto.recursos && projeto.recursos.length > 0 && (
              <div>
                <h4 className="font-semibold text-white mb-2">Recursos Úteis</h4>
                <ul className="space-y-1">
                  {projeto.recursos.map((recurso, index) => (
                    <li key={index}>
                      <a 
                        href={recurso.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-[#00BFFF] hover:text-[#0056b3] transition"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        {recurso.titulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4">
              <button className="w-full py-2 bg-[#007BFF] text-white rounded-md hover:bg-[#0056b3] transition">
                Iniciar Projeto
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjetoCard;