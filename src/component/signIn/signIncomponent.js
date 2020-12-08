import React, { Component, useState } from 'react'
import Frominput from '../fromInput/fromInput'
import '../signIn/signIncomponent.scss'
import Button from '../button/button'

import {auth, signInWithGoogle} from '../DataFirebase/firebase' 

const SignIn = () =>{
    const [userCrendential, setUserCrendential] = useState({ email:'',password:''})
    const {email,password} = userCrendential
    
    const handfromChange = async event =>{
        event.preventDefault()
            try{
                await auth.signInWithEmailAndPassword(email,password);
                setUserCrendential({
                    email:'',
                    password:'',
                })
                alert('Welcome')
            }catch (error){
                console.log('fail',error)
                alert(error)
            }
    }

    const inputChange = (e) =>{
        e.preventDefault()
        const {name,value} = e.target
        // 改變 state
        setUserCrendential({...userCrendential ,[name]:value})
        
    }

        return(
            <div className='signin'>
                <h1>帳號登入</h1>
                {/* <span> Sign in</span> */}
                <form onSubmit={handfromChange}>
                    <Frominput inputChange={inputChange} label="email" name="email" type="email" value={email} required/>
                    <Frominput inputChange={inputChange} label="password" name="password" type="password" value={password} required/>
                    <Button tpye="submit" value="sunmmit From" > 登入</Button>
                    <Button  onClick={signInWithGoogle} isGoogleSignIn> 
                    {''}
                    使用登入 Google 帳號{''}
                    </Button>
                </form>

            </div>
        )
    }


export default SignIn

