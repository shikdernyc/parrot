import {ADD_TO_DOMAIN_LIST} from 'Constants/actionTypes'

export function addToDomainList(domain){
    return{
        type: ADD_TO_DOMAIN_LIST,
        domain
    }
}