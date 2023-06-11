//In order to hit our base api URL we must import, the API instance files that handle any section of the API.
import { instance } from "./base.api"

//This word hits the endpoint that directs to the product section of the API.
const endpoint = {
    base : "products",

    bestProducts : "best_products",
    orderedProducts : "order",
    invertedOrderProducts : "order_inverted",

    filter : "filter",
    greater : "greater",
    lower : "lower"

}

//Now we declare an object for calling the product section. Within this object we can have different functions, for hitting our endpoint in different ways.
export const products = {

    //1. gets all the objects within the "product endpoint."
    getAll : function () {
        return instance.get(`${endpoint.base}`)
    },
    //2. activates the API search function in order to search a product by name.
    getProduct : function (name : string) {
        return instance.get(`${endpoint.base}/${name}` )
    },
    //3. gets the best product that the api found.
    getBest : function () {
        return instance.get(`${endpoint.base}/${endpoint.bestProducts}`)
    },
    //4. gets the ordered products by price
    getOrdered : function () {
        return instance.get(`${endpoint.base}/${endpoint.orderedProducts}`)
    },
    //5. gets the inverse order of the previous request
    getOrderedInverted : function () {
        return instance.get(`${endpoint.base}/${endpoint.invertedOrderProducts}`)
    },
    //6. gets the products with the price greater than the given price
    getGreater : function (minPrice : number) {
        return instance.get(`${endpoint.base}/${endpoint.filter}/${endpoint.greater}/${minPrice}`);
    },
    //7. gets the products with the price greater than the given price
    getLower : function (maxPrice : number) {
        return instance.get(`${endpoint.base}/${endpoint.filter}/${endpoint.lower}/${maxPrice}`);
    },
    //8. get the products within the range of prices
    getRange : function (minPrice : number, maxPrice : number){
        return instance.get(`${endpoint.base}/${endpoint.filter}/${minPrice}/${maxPrice}`)
    }

}