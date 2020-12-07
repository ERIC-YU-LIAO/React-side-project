import React, { useState } from 'react'

import Frominput from '../fromInput/fromInput'
import Button from '../button/button'
import {auth,creatUserProfileDocument} from '../DataFirebase/firebase'

import '../signup/SignUp.scss' 




const Signup = () =>{
      
    const [userCrendential,setUserCrendential] = useState({
        displayName:'',
        email:'',
        password:'',
        comfirmPassword:'',        
    })

   const  handlesummit = async event => {
        event.preventDefault()
        const {displayName,email,password,comfirmPassword} = userCrendential
        if (password !== comfirmPassword){
            alert('此密碼不正確!!')
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await creatUserProfileDocument(user,{displayName})
            //更新 為空值
            setUserCrendential({
                displayName:'',
                email:'',
                password:'',
                comfirmPassword:'',
            })
           
        }
        catch(error){
            console.log('error',error)
        }
    }

    const hadleChange = event => {
        const {name, value} = event.target
        setUserCrendential({[name]:value})
    }

        const {displayName,email,password,comfirmPassword} = userCrendential
        return(
            <div className="sign-up">
                    <h2 className="title">I don't have account</h2>
                    <span>sign up with email and  password</span>
                    <form className="sign-up-form" onSubmit={handlesummit}>
                        <Frominput
                        type="text"
                        name='displayName'
                        value={displayName}
                        onChange={hadleChange}
                        label='DisplayName'
                        required
                        />
                        <Frominput
                        type="text"
                        name='email'
                        value={email}
                        onChange={hadleChange}
                        label='email'
                        required
                        />
                        
                        <Frominput
                        type="text"
                        name='password'
                        value={password}
                        onChange={hadleChange}
                        label='password'
                        required
                        />
                        <Frominput
                        type="text"
                        name='comfirmPassword'
                        value={comfirmPassword}
                        onChange={hadleChange}
                        label='comfirmPassword'
                        required
                        /> 
                        <Button type="submit">submit</Button>
                    </form>
            </div>
        )
    }


export default Signup;