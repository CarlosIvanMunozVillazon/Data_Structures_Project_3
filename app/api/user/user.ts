import { instance } from "../base.api";

const endpoint = {
  user: "user",
  session: "session",
  log_out: "log_out",
};

export const apiUser = {
  //used For validating the user
  getUserValidation: (email: string, password: string) => {
    return instance.get(`${endpoint.user}`, {
      params: {
        cur_email: email,
        cur_password: password,
      },
    });
  },

  //for modifying the user
  putUser: (
    name: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    return instance.put(`${endpoint.user}`, null, {
      params: {
        nombre: name,
        apellido: lastName,
        email: email,
        password: password,
      },
    });
  },

  //for putting new
  postUser: (
    name: string,
    lastName: string,
    correo: string,
    contrasenha: string
  ) => {
    return instance.post(`${endpoint.user}`, null, {
      params: {
        email: correo,
        password: contrasenha,
        nombre: name,
        apellido: lastName,
      },
    });
  },

  //for deleting users
  deleteUser: () => {
    return instance.delete(`${endpoint.user}`);
  },

  //for checking the session
  getSessionStatus: () => {
    return instance.get(`${endpoint.user}/${endpoint.session}`);
  },

  //for logging out
  putLogOut: () => {
    return instance.put(`${endpoint.user}/${endpoint.log_out}`);
  },
};
