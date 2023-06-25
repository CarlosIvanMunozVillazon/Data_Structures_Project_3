import { instance } from "../base.api";

const endpoint = {
  wishList: "wish_list",
  product: "product",
  maxProduct: "max_product",
  ids: "ids",
  name: "name",
  id: "id",
};

export const apiWishList = {
  getWishList: (wishListId: number) => {
    return instance.get(`${endpoint.wishList}`, {
      params: {
        id: wishListId,
      },
    });
  },

  postNewWishList: (nombre: string) => {
    return instance.post(`${endpoint.wishList}`, null, {
      params: {
        name: nombre,
      },
    });
  },

  deleteWishList: (wishListId: number) => {
    return instance.delete(`${endpoint.wishList}`, {
      params: {
        id: wishListId,
      },
    });
  },

  postWishListProduct: (
    wishListId: number,
    title: string,
    price: number,
    link: string,
    store: string,
    brand: string,
    image: string
  ) => {
    return instance.post(`${endpoint.wishList}/${endpoint.product}`, null, {
      params: {
        wish_list_id: wishListId,
        titulo: title,
        precio: price,
        link: link,
        tienda: store,
        marca: brand,
        image: image,
      },
    });
  },

  deleteWishListProduct: (
    wishListId: number,
    title: string,
    price: number,
    link: string,
    store: string,
    image: string,
    brand: string,
    
  ) => {
    return instance.delete(`${endpoint.wishList}/${endpoint.product}`, {
      params: {
        wish_list_id: wishListId,
        titulo: title,
        precio: price,
        link: link,
        tienda: store,
        image: image,
        marca: brand,
        
      },
    });
  },

  deleteWishListMax: (wishListId: number) => {
    return instance.delete(`${endpoint.wishList}/${endpoint.maxProduct}`, {
      params: {
        wish_list_id: wishListId,
      },
    });
  },

  getWishListName: (wishListId: number) => {
    return instance.get(`${endpoint.wishList}/${endpoint.id}`, {
      params: {
        id: wishListId,
      },
    });
  },

  getWishListId: (wishListName: string) => {
    return instance.get(`${endpoint.wishList}/${endpoint.id}`, {
      params: {
        name: wishListName,
      },
    });
  },

  putWishListName: (wishListId: number, wishListName: string) => {
    return instance.put(`${endpoint.wishList}/${endpoint.id}`, null, {
      params: {
        id: wishListId,
        new_name: wishListName,
      },
    });
  },

  getAllIds: () => {
    return instance.get(`${endpoint.wishList}/${endpoint.ids}`);
  },
};
