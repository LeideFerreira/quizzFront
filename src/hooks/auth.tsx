import React, { createContext, useState, useContext, useEffect } from "react";
import { signInService } from "./service";

interface AuthContextData {
  logged: boolean;
  user: object | null;
  signIn(user: object): Promise<void>;
  signOut(): void;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@sistema:logged');
    return !!isLogged;
  });

  async function signIn(user:object){
     const response =  await signInService('/api/auth/login',user);
      if(response){
        localStorage.setItem('@sistema:logged', 'true');
        setLogged(true);
        setUser(response.user);
     };
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{logged,user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
