import { instance } from "../base.api";

const endpoint = {
  wishList: "wish_list",

  product: "product",

  maxProduct: "max_product",
};

export const apiWishList = {
  getWishList: () => {
    return instance.get(`${endpoint.wishList}`);
  },

  postWishList: (title: string,price: number, link: string, store: string, brand: string) => {
    return instance.post(`${endpoint.wishList}/${endpoint.product}`, {
      titulo: title,
      precio: price,
      link: link,
      tienda: store,
      marca: brand,
    });
  },

  deleteWishListProduct: (title: string,price: number,link: string,store: string,brand: string) => {
    return instance.delete(`${endpoint.wishList}/${endpoint.product}`,{data : {
        titulo: title,
        precio: price,
        link: link,
        tienda: store,
        marca: brand,
    }});
  },

  deleteWishListMax : () => {
    return instance.delete(`${endpoint.wishList}/${endpoint.maxProduct}`)
  }

};
