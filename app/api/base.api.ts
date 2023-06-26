import axios from "axios";  //import axios library for making petitions

//Copy the base API URL for hitting its endpoints.
export const BASE_URL_LOCAL = "http://127.0.0.1:8000";

export const BASE_URL = "http://18.228.19.131/";

//Instantiate Axios and then export it.
//e.i Axios's instance means API connection is created.
export const instance = axios.create(
    {
        baseURL:BASE_URL
    }
)

export const instance_local = axios.create(
    {
        baseURL:BASE_URL_LOCAL
    }
)

//Then for hitting different endpoints we should handle them within different files ex = "product.ts"