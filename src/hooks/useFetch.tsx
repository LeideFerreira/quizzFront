import useSWR from "swr";
import api from "../api";


const fetcher = (url:string) => api.get(url).then(resp => resp.data)

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url,fetcher)

  return { data, error };
}