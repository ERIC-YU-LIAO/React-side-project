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
                <h1>This is Account</h1>
                {/* <span> Sign in</span> */}
                <form onSubmit={handfromChange}>
                    <Frominput inputChange={inputChange} label="email" name="email" type="email" value={email} required/>
                    <Frominput inputChange={inputChange} label="password" name="password" type="password" value={password} required/>
                    <Button tpye="submit" value="sunmmit From" > Sign in</Button>
                    <Button  onClick={signInWithGoogle} isGoogleSignIn> 
                    {''}
                    Sign in with Google{''}
                    </Button>
                </form>

            </div>
        )
    }


export default SignIn

