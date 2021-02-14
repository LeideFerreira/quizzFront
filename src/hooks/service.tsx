
import useSWR from "swr";
import api from "../api";

interface Response {
  token: string;
  user: {
    name: string,
    email: string,
  };
}

const fetcher = (url:string) => api.get(url).then(resp => resp.data);


function signInService(url:string, user:object): Promise<Response>{//Conversa com api
  return new Promise((resolve, reject) => {
    api.post(url,user)
    .then((resp)=>{
      console.log(resp.data);
      resolve(resp.data);
    }).catch((error)=>{
      reject(error);
    })
  });
}

function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url,fetcher)
  return { data, error };
}

export  {useFetch,signInService}