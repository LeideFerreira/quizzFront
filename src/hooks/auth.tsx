import React, { createContext, useState, useContext, useEffect } from "react";
import { signInService,updateAvaliacao } from "./service";

interface User {
  id: number;
  username: string;
  email: string;
  nivel:string;
}

interface AuthContextData {
  logged: boolean;
  user: User | null;
  signIn(user: object): Promise<void>;
  signOut(): void;
  atualizaAvaliacao(id:number,ava:string): Promise<void>;

}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { //Funcao para pegar os storaged do SignIn
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem('@QuizzAuth:user');
      const storagedToken = await localStorage.getItem('@QuizzAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  async function signIn(user: object) { //requisicao post
    const resp = await signInService('/api/auth/login', user);
    setUser(resp.user); //Inserir novo usuario
    await localStorage.setItem('@QuizzAuth:user', JSON.stringify(resp.user));//Guardar o user no LocalStorage
    await localStorage.setItem('@QuizzAuth:token', resp.token);//Guardar o user no LocalStorage
  }

  async function signOut() {
    await localStorage.clear();
    setUser(null);
  }

  async function atualizaAvaliacao(id:number,ava:string) {
    const resp = await updateAvaliacao('/api/auth/update/',id,ava);
    setUser(resp.user);
  }

  return (
    <AuthContext.Provider value={{ logged: Boolean(user), user, signIn, signOut,atualizaAvaliacao }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export const getToken = () => localStorage.getItem('@QuizzAuth:token');
export { AuthProvider, useAuth };
