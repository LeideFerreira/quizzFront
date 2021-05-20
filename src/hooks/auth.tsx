 import React, { createContext, useState, useContext, useEffect} from "react";
import { signInService,updateAvaliacao ,createRodada} from "./service";

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
  novaRodada(rodada: object): Promise<void>;


}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => { //Funcao para pegar os storaged do SignIn
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem('@QuizzAuth:user');
      const storagedToken = await localStorage.getItem('@QuizzAuth:token');

      if (storagedUser && storagedToken) { 
        setLogged(true); 
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);

  async function signIn(user: object) { //requisicao post
    const resp = await signInService('/api/auth/login', user);//Buscar na api
    setUser(resp.user); //Insere novo usuario
    setLogged(true);
    await localStorage.setItem('@QuizzAuth:user', JSON.stringify(resp.user));//Guardar o user no localStorage
    await localStorage.setItem('@QuizzAuth:token', resp.token);//Guardar o token no localStorage
  }
  async function atualizaAvaliacao(id:number,ava:string) {
    const resp = await updateAvaliacao('/api/auth/update/',id,ava);
    if(resp){
      setUser(resp);
      await localStorage.setItem('@QuizzAuth:user', JSON.stringify(resp));//Guardar o user no localStorage
    } else{
      console.log("Quando o grave faz Tuuum");
    }
  }

  async function novaRodada(rodada:object){
    await createRodada(rodada);
  }

  async function signOut() {
    await localStorage.clear();
    setLogged(false);
    setUser(null);
  }
  
  return (
    <AuthContext.Provider value={{ logged, user, signIn, signOut,atualizaAvaliacao,novaRodada }}>
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
