//The endpoints should be worked in different files.

//1. import axios.
import axios from "axios"; 

export const BASE_URL = "https://rickandmortyapi.com/api/";//Base API endpoint

//Here we import axios conecction. i.e Axios's instance.
export const instance = axios.create(
    {
        baseURL:BASE_URL
    }
)