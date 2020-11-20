import React from 'react'

import Frominput from '../fromInput/fromInput'
import Button from '../button/button'
import {auth,creatUserProfileDocument} from '../DataFirebase/firebase'

import '../signup/SignUp.scss' 

class Signup extends React.Component{
    constructor(){
        super()
        this.state = {
            displayName:'',
            email:'',
            password:'',
            comfirmPassword:'',
        }
    }


    handlesummit = async event => {
        event.preventDefault()
        const {displayName,email,password,comfirmPassword} =  this.state
        if (password !== comfirmPassword){
            alert('It is not correct!!')
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await creatUserProfileDocument(user,{displayName})
            //更新 為空值
            this.setState({
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

    hadleChange = event => {
        const {name, value} = event.target
        this.setState({[name]:value})

    }


    render(){
        const {displayName,email,password,comfirmPassword} = this.state
        return(
            <div className="sign-up">
                    <h2 className="title">I don't have account</h2>
                    <span>sign up with email and  password</span>
                    <form className="sign-up-form" onSubmit={this.handlesummit}>
                        <Frominput
                        type="text"
                        name='displayName'
                        value={displayName}
                        onChange={this.hadleChange}
                        label='DisplayName'
                        required
                        />
                        <Frominput
                        type="text"
                        name='email'
                        value={email}
                        onChange={this.hadleChange}
                        label='email'
                        required
                        />
                        
                        <Frominput
                        type="text"
                        name='password'
                        value={password}
                        onChange={this.hadleChange}
                        label='password'
                        required
                        />
                        <Frominput
                        type="text"
                        name='comfirmPassword'
                        value={comfirmPassword}
                        onChange={this.hadleChange}
                        label='comfirmPassword'
                        required
                        /> 
                        <Button type="submit">submit</Button>
                    </form>
            </div>
        )
    }
}

export default Signup;