import { instance } from "../base.api";

const endpoint = {

    othersSellers : 'sellers',
    othersBrands : 'brands',

    otherSeller : 'seller'
}

export const apiOthers = {

    getSellers : () => {
        return instance.get(`${endpoint.othersSellers}`)
    },

    getBrands : () => {
        return instance.get(`${endpoint.othersBrands}`)
    },

    getBrandsAndSellers : (sellerName : string) => {
        return instance.get(`${endpoint.othersBrands}/${endpoint.otherSeller}`, {params : {
            seller : sellerName
        }}) 
    }
    
}