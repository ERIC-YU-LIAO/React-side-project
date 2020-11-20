import React, { Component } from 'react'
import Frominput from '../fromInput/fromInput'
import '../signIn/signIncomponent.scss'
import Button from '../button/button'

import {auth, signInWithGoogle} from '../DataFirebase/firebase' 

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',    
        }
    }


    handfromChange = async event =>{
        event.preventDefault()
            const {email,password} =this.state
            try{
                await auth.signInWithEmailAndPassword(email,password);
                this.setState({
                    email:'',
                    password:'',
                })
            }catch (error){
                console.log('fail',error)
            }
    }

    inputChange = (e) =>{
        e.preventDefault()
        const {name,value} = e.target
        this.setState({[name]:value})
        
    }

    render(){
        return(
            <div className='signin'>
                <h1>This is Account</h1>
                {/* <span> Sign in</span> */}
                <form onSubmit={this.handfromChange}>
                    <Frominput inputChange={this.inputChange} label="email" name="email" type="email" value={this.state.email} required/>
                    <Frominput inputChange={this.inputChange} label="password" name="password" type="password" value={this.state.password} required/>
                    <Button tpye="submit" value="sunmmit From" > Sign in</Button>
                    <Button  onClick={signInWithGoogle} isGoogleSignIn> 
                    {''}
                    Sign in with Google{''}
                    </Button>
                </form>

            </div>
        )
    }
}


export default SignIn

