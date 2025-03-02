export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  nivel: 'junior' | 'pleno' | 'senior';
  tipo: 'web' | 'backend' | 'mobile' | 'desktop' | 'fullstack';
  tecnologias: string[];
  dicas: string[];
  recursos?: {
    titulo: string;
    url: string;
  }[];
}

export interface Desafio {
  id: number;
  titulo: string;
  descricao: string;
  nivel: 'junior' | 'pleno' | 'senior';
  tempoEstimado: string;
  requisitos: string[];
  dicas: string;
}

export interface Plano {
  id: number;
  tipo: 'gratuito' | 'basico' | 'premium';
  titulo: string;
  descricao: string;
  preco: number;
  recursos: string[];
}