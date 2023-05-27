//The endpoints should be worked in different files.

//1. import axios.
import axios from "axios"; 

export const BASE_URL = "http://127.0.0.1:8000";//Base API endpoint

//Here we import axios conecction. i.e Axios's instance, api connection is created.
export const instance = axios.create(
    {
        baseURL:BASE_URL
    }
)