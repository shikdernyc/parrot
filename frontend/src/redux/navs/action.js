import {SET_SIDENAV_ISOPEN, SET_TOP_NAV_PROPS} from 'Constants/actionTypes'

export function setSideBarIsOpen(sideBarIsOpen){
    return{
        type: SET_SIDENAV_ISOPEN,
        sideBarIsOpen
    }
}

export function setTopNavProps(props){
    return {
        type: SET_TOP_NAV_PROPS,
        props
    }
}