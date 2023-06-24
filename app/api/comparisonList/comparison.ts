import { instance } from "../base.api";

const endpoint = {

    comparisonList : 'comparison_list',

    comparisonListOrder : 'order',
    comparisonListOrderInverted : 'order_inverted',
    comparisonListCompare : 'comparison',

    comparisonListProduct : 'product',

}

export const apiComparisonList = {

    getComparisonList : () => {
        return instance.get(`${endpoint.comparisonList}`)
    },

    getComparisonListOrdered : () => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.comparisonListOrder}`)
    },

    getComparisonListOrderInverted : () => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.comparisonListOrderInverted}`)
    },

    postComparisonListProduct : (title: string, price: number, link: string, store: string, brand: string) => {
        return instance.post(`${endpoint.comparisonList}/${endpoint.comparisonListProduct}`,{
            titulo: title,
            precio: price,
            link: link,
            tienda: store,
            marca: brand,
        })
    },

    deleteComparisonList : (title: string, price: number, link: string, store: string, brand: string) => {
        return instance.delete(`${endpoint.comparisonList}/${endpoint.comparisonListProduct}`,{data : {
            titulo: title,
            precio: price,
            link: link,
            tienda: store,
            marca: brand,
        }})
    }
}