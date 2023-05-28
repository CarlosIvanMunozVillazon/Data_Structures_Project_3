import axios from "axios";  //import axios library for making petitions

//Copy the base API URL for hitting its endpoints.
export const BASE_URL = "http://127.0.0.1:8000";

//Instantiate Axios and then export it.
//e.i Axios's instance means API connection is created.
export const instance = axios.create(
    {
        baseURL:BASE_URL
    }
)

//Then for hitting different endpoints we should handle them within different files ex = "product.ts"