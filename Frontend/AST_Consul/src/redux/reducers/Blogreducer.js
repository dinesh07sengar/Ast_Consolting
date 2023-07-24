import React from 'react'
import {POSTIMAGE_SUCCESSFULL,
 POSTIMAGE_FAIL,
 GETIMAGE_SUCCESSFULLY,
 GETIMAGE_FAIL, 
 COMMENTADD_SUCCESSFULLY, 
 COMMENTADD_Fail, 
 CREATEALBUM_FAIL,
 CREATEALBUM_SUCCESFULL,
 LOGIN_SUCCESS,
 GETALBUM_SUCCESSFUL,GETALBUM_Fail,  ALBUMIdGET,
  } from "../Action/ActionType"
import axios from 'axios'


const initial = {
    Gallery: [],
    Album:[],
   Comment:[],
   isAuth:false,
   Id:"",
   failure:true,
   success:false
}

export const Blogreducer = (state = initial, action) => {
    switch (action.type) {

        case GETIMAGE_SUCCESSFULLY: {
            return {
                ...state, Gallery: action.payload
            }
        }
        case ALBUMIdGET:{
            return{
                ...state,Id:action.payload
            }
        }
        case LOGIN_SUCCESS: {
            return{
                ...state,isAuth:true
            }
        }
        case GETALBUM_SUCCESSFUL: {
            return {
                ...state, Album: action.payload
            }
        }
        case POSTIMAGE_SUCCESSFULL:{
            return{
                ...state,success:true,failure:false
            }
        }
        case POSTIMAGE_FAIL:{
            return{
                ...state,success:true,failure:false
            }
        }
        case COMMENTADD_SUCCESSFULLY:{
            return{
                ...state,success:true,failure:false
            }

        }
       
        default:
            return state;
    }
}