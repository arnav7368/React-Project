import { ADD_MAINCATEGORY, DELETE_MAINCATEGORY, GET_MAINCATEGORY, UPDATE_MAINCATEGORY } from "../Constants"


export function addmaincategory(data){
    return{
        type:ADD_MAINCATEGORY,
        payload:data
    }
}
export function getmaincategory(){
    return{
        type:GET_MAINCATEGORY
    }
}
export function updatemaincategory(data){
    return{
        type:UPDATE_MAINCATEGORY,
        payload:data
    }
}
export function deletemaincategory(data){
    return{
        type:DELETE_MAINCATEGORY,
        payload:data
    }
}