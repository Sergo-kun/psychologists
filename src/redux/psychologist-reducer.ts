import man_img from '../images/man.png'
import girl_img from '../images/girl.png'
import React from 'react'

const RETURN_PSYCHOLOGISTS = "RETURN_PSYCHOLOGISTS"


let initialState = {
    man : [
        {img: man_img, name : 'Кирил Капронов'},
        {img: girl_img, name : 'Кирил Капронов'}]
}

const psychologistReducer = (state = initialState, action) =>  {
    switch (action.type) {
        case RETURN_PSYCHOLOGISTS:
            return {
                ...state,
                man: {...action.man}
            }


        default:
            return state
}
}
const retPsySuccess = () => ({type: RETURN_PSYCHOLOGISTS, psy})



export default psychologistReducer