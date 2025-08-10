import { useState } from 'react';
import '../src/styles/Loginpage.css'

function Login({setStyle,newStyle}){
    console.log(setStyle.display);

    function chenge(){
        
    }
    

    return(
        <>
            <div className="loginContainer" style={setStyle} >

                    <img src="../src/accets/icons/back.png" alt="back" className='backImg'  onClick={chenge}/>
                    <img src="../src/accets/icons/back.png" alt="back" className='backImg1' onClick={chenge}/>

                <div className="imgContainer">
                    <span>WellCome</span>
                    <img src="../src/accets/LoginpageImg.png" alt="img" className='LoginImg1' />
                    <img src="../src/accets/LoginpageImg.png" alt="img" className='LoginImg2' />
                    <img src="../src/accets/LoginpageImg.png" alt="img" className='LoginImg3' />
                    <img src="../src/accets/LoginpageImg.png" alt="img" className='LoginImg4' />
                    <img src="../src/accets/LoginpageImg.png" alt="img" className='LoginImg5' />

                </div>
                <div className="loginBox">
                    <h1>Login</h1>
                    <p className='text'>Hey enter your details to sign into your account</p>
                    
                    <p className="id">User ID</p>
                    <input type="text" placeholder="Enter your username" />
                    <p className="pass">Password</p>
                    <input type="password" placeholder="Enter your password" />
                    <button className="login-button">Login</button>
                    
                    <p className="email-signin">or sign in with Email</p>
                    <div className="google-signin">
                        <span>Sign in with Google</span>
                    </div>
                    
                    <p className="createAc">
                        Not registered yet?
                        <a href="registerpage.html">Create an account</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;