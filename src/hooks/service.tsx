import useSWR from "swr";
import api from "../api";

interface Response {
  token: string;
  user: {
    id: number,
    username: string,
    email: string,
  };
}

const fetcher = (url: string) => api.get(url).then(resp => resp.data);

function signInService(url: string, user: object): Promise<Response> {//Conversa com api
  return new Promise((resolve, reject) => {
    api.post(url, user).then((resp) => {
      resolve(resp.data);
    }).catch((error) => {
      alert('Senha ou usuário inválidos!!');
    })
  });
}


function avaliacaoGET<Data=any>(url: string, user_id: number){
  return new Promise<Data>((resolve,reject)=>{
    api.get(url+user_id).then((resp) =>{
      console.log(resp.data)
      resolve(resp.data);
    }).catch((error) => {
      alert('Deu ruim!!');
    })
  });
}

function avaliacaoPOST(url: string, avaliacao: object) {//Salvar dados na avaliacao
  api.post(url, avaliacao)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}


function avaliacaoPUT(url: string, avaliacao: object, id: number) {//Salvar dados na avaliacao
  api.put(url + id, avaliacao)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}


function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, fetcher)
  return { data, error };
}

export { useFetch, signInService, avaliacaoPOST, avaliacaoPUT,avaliacaoGET }