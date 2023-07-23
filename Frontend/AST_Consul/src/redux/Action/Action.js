import {POSTIMAGE_SUCCESSFULL,POSTIMAGE_FAIL,
    GETIMAGE_SUCCESSFULLY,GETIMAGE_FAIL, COMMENTADD_SUCCESSFULLY, COMMENTADD_Fail, 
    CREATEALBUM_FAIL,REGISTER_SUCCESS,REGISTER_FAIL,CREATEALBUM_SUCCESFULL,
    LOGIN_SUCCESS,GETALBUM_SUCCESSFUL,GETALBUM_Fail,LOGIN_FAIL} from "../Action/ActionType"

import axios from 'axios'

const url="http://localhost:4800"

const Registeration_success=(payload)=>{
    return({
        type:REGISTER_SUCCESS,
        payload
    })
}

const Registeration_fail=(payload)=>{
    return({
        type:REGISTER_FAIL,
        payload
    })

}
const Login_succesfull=(payload)=>{
    return({
        type:LOGIN_SUCCESS,
        payload
    })

}
const Login_fail=(payload)=>{
    return({
        type:LOGIN_FAIL,
        payload
    })

}
const Getalbum_succesfull=(payload)=>{
    return({
        type:GETALBUM_SUCCESSFUL,
        payload
    })

}
const Getalbum_Fail=(payload)=>{
    return({
        type:GETALBUM_Fail,
        payload
    })

}
const Create_album_success=(payload)=>{
    return({
        type:CREATEALBUM_SUCCESFULL,
        payload
    })

}
const Create_album_fail=(payload)=>{
    return({
        type:CREATEALBUM_FAIL,
        payload
    })

}
const Create_comment_success=(payload)=>{
    return({
        type:COMMENTADD_SUCCESSFULLY,
        payload
    })

}
const Create_comment_fail=(payload)=>{
    return({
        type:COMMENTADD_Fail,
        payload
    })

}
const GetGalley_success=(payload)=>{
    return({
        type:GETIMAGE_SUCCESSFULLY,
        payload
    })
}
const GetGalley_fail=(payload)=>{
    return({
        type:GETIMAGE_FAIL,
        payload
    })
}



export const Customthunk=(method,val)=>{
    return (dispatch)=>{

        const Postimage=(dispatch,data)=>{
            const token=localStorage.getItem("token")
            axios.post('http://localhost:4800/img/images', data, {
            headers: {
                "auth":token,
              'Content-Type': 'multipart/form-data', 
            },
          })
          .then((response) => {
            
            console.log( response.data);
          })
          .catch((error) => {
            
            console.error('Error uploading image:', error);
          });
        }
        const Register=(dispatch,data)=>{
            axios.post(`${url}/user/register`,data)
            .then((d)=>{
                console.log(d)

            })
            .catch((er)=>{
                console.log(er)

            })
        }
        const Login=(dispatch,data)=>{
            axios.post(`${url}/user/login`,data)
            .then((d)=>{
                console.log(d.data.user)
                dispatch(Login_succesfull(d.data.user))
                localStorage.setItem("token",d.data.token)

            })
            .catch((er)=>{
                console.log(er)
                dispatch(d)

            })

        }
        const Createalbum=(dispatch,data)=>{
            axios.post(`${url}/user/register`,data)
            .then((d)=>{
                console.log(d)

            })
            .catch((er)=>{
                console.log(er)

            })

        }
        const Getalbum=(dispatch)=>{
            axios.get(`${url}/user/register`)
            .then((d)=>{
                console.log(d)

            })
            .catch((er)=>{
                console.log(er)

            })

        }
        const Gallery=(dispatch)=>{
            console.log("aya yha")
            axios.get(`${url}/img`)
            .then((d)=>{
                console.log(d)

            })
            .catch((er)=>{
                console.log(er)

            })

        }
        const Createcomment=(dispatch)=>{
            axios.post(`${url}/user/register`,data)
            .then((d)=>{
                console.log(d)

            })
            .catch((er)=>{
                console.log(er)

            })

        }

        if(method==="register"){
            Register(dispatch,val)
            
        }
        else if(method==='login'){
            Login(dispatch,val)

        }
        else if (method==="GG"){
            Gallery(dispatch)

        }
        else if (method==="GA"){
            Getalbum(dispatch)
            
        }
        else if (method==="CC"){
            Createcomment(dispatch,val)
            
        }
        else if(method==="CP"){
            Postimage(dispatch,val)
        }
        else {
            Createalbum(dispatch,val)
        }

    }
}