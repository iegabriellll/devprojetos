import React, { createContext, useContext, useState } from 'react';

interface User {
  admin: boolean; // Propriedade admin
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Lógica de login
    if (email === "admin@example.com" && password === "password123") {
      setUser({ admin: true }); // Defina o usuário como admin se as credenciais estiverem corretas
      return true; // Retorne true para indicar sucesso
    }
    return false; // Retorne false se as credenciais estiverem incorretas
  };

  const isAdmin = () => user?.admin === true;

  const handleLogin = async () => {
    const email = prompt('Digite seu email:') || '';
    const password = prompt('Digite a senha:') || '';

    if (email && password) {
      const success = await login(email, password);

      if (!success) {
        alert('Credenciais incorretas!');
      } else {
        console.log('Login bem-sucedido!');
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, isAdmin }}>
      {children}
      <button onClick={handleLogin}>
        Fazer Login
      </button>
    </AuthContext.Provider>
  );
}; 