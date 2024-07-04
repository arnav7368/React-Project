import { ADD_SUBCATEGORY, DELETE_SUBCATEGORY, GET_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../Constants"


export function addsubcategory(data){
    return{
        type:ADD_SUBCATEGORY,
        payload:data
    }
}
export function getsubcategory(){
    return{
        type:GET_SUBCATEGORY
    }
}
export function updatesubcategory(data){
    return{
        type:UPDATE_SUBCATEGORY,
        payload:data
    }
}
export function deletesubcategory(data){
    return{
        type:DELETE_SUBCATEGORY,
        payload:data
    }
}