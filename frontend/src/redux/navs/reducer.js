import {SET_SIDENAV_ISOPEN, SET_TOP_NAV_PROPS} from '../../constants/actionTypes'

const initialState = {
    topNavProps: {
        buttonLink: "",
        buttonText: ""
    },
    sideBarIsOpen: false
}

export default (state=initialState, action) =>{
    switch(action.type){
        case SET_SIDENAV_ISOPEN:
            return {
                ...state,
                sideBarIsOpen: action.sideBarIsOpen
            }
        case SET_TOP_NAV_PROPS:
            return{
                ...state,
                topNavProps: action.props
            }
        default:
            return state
    }
}