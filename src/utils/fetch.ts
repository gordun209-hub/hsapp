import axios, { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'
const options: AxiosRequestConfig = {
  headers: {
    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0c306d868msh05c1298ee18bdaep1ec6b4jsn6d7e44a6af6a'
  }
}

export const useFetch = (url: string) => {
  return useQuery(url, () => axios.get(url, options))
}

export default useFetch
