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

  //post method awating for creation
  //********************************************************************** */

  deleteUser: (email: string, password: string) => {
    return instance.delete(`${endpoint}`, {
      params: {
        cur_email: email,
        cur_password: password,
      },
    });
  },
};
