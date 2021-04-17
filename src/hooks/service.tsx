import useSWR from "swr";
import { IdentifierTypePredicate } from "typescript";
import api from "../api";

interface Response {
  token: string;
  user: {
    id: number,
    username: string,
    email: string,
    nivel: string,
  };
}
interface User {
  id: number;
  username: string;
  email: string;
  nivel:string;
}

interface Rodada{
  id: number,
  pontFacil: number;
  pontMedia: number;
  pontDificil: number;
  user: number;
}

const fetcher = (url: string) => api.get(url).then(resp => resp.data);

function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, fetcher)
  return { data, error };
}


function signInService(url: string, user: object): Promise<Response> {//Conversa com api
  return new Promise((resolve, reject) => {
    api.post(url, user).then((resp) => {
      resolve(resp.data);
    }).catch((error) => {
      alert('Senha ou usuário inválidos!!');
    })
  });
}

function createRodada(rodada:object): Promise<Rodada> {
  return new Promise((resolve,reject)=>{
    api.post('api/rodada/',rodada).then((resp)=>{
      resolve(resp.data);
      console.log("Deu bom");
    }).catch((error)=>{
      alert('Não consigo salvar essa rodada!! buu');
    })
  });
}

function updateAvaliacao(url:string,id:number,ava:string):Promise<User>{
  return new Promise((resolve,reject)=>{
    api.put(url+id+'/',{nivel:ava})
    .then((res) =>{
      resolve(res.data);
    }).catch((error)=>{
      reject(error);
      alert("Impossivel modificar");
    })
  }); 
}

export { useFetch, signInService ,updateAvaliacao,createRodada}