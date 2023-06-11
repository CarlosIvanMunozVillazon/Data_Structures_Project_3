//1. import axios' instance
import { instance } from "./base.api";

//2. create endpoint hitting object
const endpoint = {
    base : "comparison_list",

    order : "order",
    orderInverted : "order_inverted",
    
    comparison : "comparison",

    product : "product"
}

//3. create functional endpoint hitting object for CRUD
export const comparisonList = {

    //3.1 show comparison list
    getComparisonList : function () {
        return instance.get(`${endpoint.base}`)
    },
    //3.2 show comparison list in order
    getComparisonListOrder : function () {
        return instance.get(`${endpoint.base}/${endpoint.order}`)
    },
    //3.3 show comparison list in inverted order
    getComparisonListInvertedOrder : function () {
        return instance.get(`${endpoint.base}/${endpoint.orderInverted}`)
    },
    //3.4 show comparisons in comparison list
    getComparisons : function () {
        return instance.get(`${endpoint.base}/${endpoint.orderInverted}`)
    }

    //3.5 add element to comparison list *POST*

    //3.6 remove element from comparison list *DELETE*
}
