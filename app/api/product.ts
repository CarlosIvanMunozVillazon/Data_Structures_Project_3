//In order to hit our base api URL we must import, the API instance files that handle any section of the API.
import { instance } from "./base.api"

//This word hits the endpoint that directs to the product section of the API.
const endpoint = "products"

//Now we declare an object for calling the product section. Within this object we can have different functions, for hitting our endpoint in different ways.
export const products = {

    //1. gets all the objects within the "product endpoint."
    getAll : function () {
        return instance.get(`${endpoint}`)
    },
    //2. activates the API search function in order to search a product by name.
    getProduct : function (name : string) {
        return instance.get(`${endpoint}/${name}` )
    }

}