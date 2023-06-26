//In order to hit our base api URL we must import, the API instance files that handle any section of the API.
import { instance, instance_local } from "../base.api"

//This word hits the endpoint that directs to the product section of the API.
const endpoint = {
    
    product : 'product',

    products : 'products',
    productsOrder : 'order',
    productsOrderInverted : 'order_inverted',
    productsBest : 'best_products',

    productsFilter : 'filter',
    productsSellers : 'seller',
    productBrand : 'brand'

}

//Now we declare an object for calling the product section. Within this object we can have different functions, for hitting our endpoint in different ways.
export const apiProducts = {

    searchProducts : function (productName : string) {
        return instance_local.get(`${endpoint.product}`,{
            params : {
                keyProd : productName
            }
        })
    },


    getAllProducts : function () {
        return instance.get(`${endpoint.products}`)
    },

    orderProducts : function () {
        return instance.get(`${endpoint.products}/${endpoint.productsOrder}`)
    },

    orderInvertedProducts : function () {
        return instance.get(`${endpoint.products}/${endpoint.productsOrderInverted}`)
    },

    bestProducts : function () {
        return instance.get(`${endpoint.products}/${endpoint.productsBest}`)
    },


    filterProductsByPrice : function (minPrice : number, maxPrice : number) {
        return instance.get(`${endpoint.products}/${endpoint.productsFilter}`, {params : {
            price_min : minPrice,
            price_max : maxPrice
        }})
    },

    filterProductsBySeller : function (sellerName : string) {
        return instance.get(`${endpoint.products}/${endpoint.productsFilter}/${endpoint.productsSellers}`, {params : {
            sellers : sellerName
        }})
    },

    filterProductsByBrand : (brandName : string) => {
        return instance.get(`${endpoint.products}/${endpoint.productsFilter}/${endpoint.productBrand}`, {params : {
            brands : brandName
        }})
    }
}