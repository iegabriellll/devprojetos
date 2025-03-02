import React from 'react';

interface SimpleRouteProps {
  children: React.ReactNode;
}

const SimpleRoute = ({ children }: SimpleRouteProps) => {
  return <>{children}</>; // Renderiza diretamente os filhos
};

export default SimpleRoute;