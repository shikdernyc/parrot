import {ADD_TO_DOMAIN_LIST} from '../../constants/actionTypes'

export function addToDomainList(domain){
    return{
        type: ADD_TO_DOMAIN_LIST,
        domain
    }
}