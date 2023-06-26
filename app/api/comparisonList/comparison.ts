import { instance } from "../base.api";

const endpoint = {

    comparisonList : 'comparison_list2',

    comparisonListOrder : 'order',
    comparisonListOrderInverted : 'order_inverted',
    comparisonListCompare : 'comparison',

    comparisonListProduct : 'product',
    comparisonListComparison : 'comparison',

    ids : 'ids',
    name : 'name',
    id : 'id'

}

export const apiComparisonList = {

    getComparisonList : (id:number) => {
        return instance.get(`${endpoint.comparisonList}`, {params : {
            id_comparison: id
        }})
    },

    postComparisonList : (nombre:string) => {
        return instance.post(`${endpoint.comparisonList}`, null, {params : {
            name : nombre
        }})
    },

    deleteComparisonList : (id:number) => {
        return instance.delete(`${endpoint.comparisonList}`, {params : {
            id_comparison : id
        }})
    },

    getComparisonListOrdered : (id:number) => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.comparisonListOrder}`, {params : {
            id_comparison : id
        }})
    },

    getComparisonListOrderInverted : (id:number) => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.comparisonListOrderInverted}`, {params: {
            id_comparison : id
        }})
    },

    getComparisonListComparison : (id:number) => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.comparisonListComparison}`, {params: {
            id_comparison : id
        }})
    },

    postComparisonListProduct : (id:number, title: string, price: number, link: string, store: string, image: string, brand: string) => {
        return instance.post(`${endpoint.comparisonList}/${endpoint.comparisonListProduct}`,null, {params : {
            id_comparison : id,
            titulo: title,
            precio: price,
            link: link,
            tienda: store,
            imagen: image,
            marca: brand
        }})
    },

    deleteComparisonListProduct : (id:number, title: string, price: number, link: string, store: string, image:string, brand: string) => {
        return instance.delete(`${endpoint.comparisonList}/${endpoint.comparisonListProduct}`,{params : {
            id_comparison : id,
            titulo: title,
            precio: price,
            link: link,
            tienda: store,
            imagen: image,
            marca: brand
        }})
    },

    getComparisonListID : (nombre:string) => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.id}`, {params: {
            name : nombre
        }})
    },

    getComparisonListName : (id:number) => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.name}`, {params: {
            id_comparison : id
        }})
    },

    putComparisonListName : (id:number, nuevo_nombre:string) => {
        return instance.put(`${endpoint.comparisonList}/${endpoint.name}`, null, {params: {
            id_comparison : id,
            new_name : nuevo_nombre
        }})
    },

    getComparisonListIDs : () => {
        return instance.get(`${endpoint.comparisonList}/${endpoint.ids}`)
    }
}