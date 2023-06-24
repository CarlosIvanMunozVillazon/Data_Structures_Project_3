import { instance } from "../base.api";

const endpoint: string = "user";

export const apiUser = {
  //used For validating the user
  getUser: (email: string, password: string) => {
    return instance.get(`${endpoint}`, {
      params: {
        cur_email: email,
        cur_password: password,
      },
    });
  },

  //for modifying the user
  putUser: (email: string, password: string) => {
    return instance.put(`${endpoint}`, null, {
      params: {
        cur_email: email,
        cur_password: password,
      },
    });
  },

  //for putting new
  postUser : (ID : number, name : string, lastName : string, correo : string, contrasenha : string) => {
    
    return instance.post(`${endpoint}`,{
      id : ID,
      nombre : name,
      apellido : lastName,
      email : correo,
      password : contrasenha
    })
  },
  
  //for deleting users
  deleteUser: (email: string, password: string) => {
    return instance.delete(`${endpoint}`, {
      params: {
        cur_email: email,
        cur_password: password,
      },
    });
  },
};
