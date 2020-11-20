import React from 'react'
import SignIn from '../signIn/signIncomponent'
import SignUp from '../signup/SignUp.component'
import '../signinPage/signinpage.scss'
const SigninPage  = ()=>{
    
    return(
     <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
    )
}

export default SigninPage