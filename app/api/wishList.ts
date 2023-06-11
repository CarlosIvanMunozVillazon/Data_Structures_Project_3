//1. import axios' instance
import { instance } from "./base.api"

//2 create endpoint hitting object
const endpoint = {
    base : "whish",

    product : "product",
    maxProduct : "max_product"
}

//3. create endpoint calling object which implements the functions for CRUD operations
export const wishList = {

    //3.1 show whish list
    getWhishList : function () {
        return instance.get(`${endpoint.base}`)
    }

    //3.2 new element in wish list *POST*

    //3.3 delete element in wish list *DELETE*

    //3.4 delete max price element in wish list *DELETE*

}

