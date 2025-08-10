import {useState} from 'react';
import './styles/NavBar.css';
import Btn from './component/Btn';
import Login from './Loginpage';
import Profile from './Profile';
import LoginPage from "./Loginpage";
import MenuBar from './MenuBar';


function NavBar(){
    let [loginpage,setloginpage]=useState("none");
    let [profilepage,setprofilepage]=useState('none');
    let [menupage,setmenupage]=useState("none");

    function callLoginPage(){
        loginpage=='none'?setloginpage("flex"):setloginpage('none');
        console.log(loginpage);
        if(profilepage!="none" || menupage!='none'){
            setprofilepage('none');
            setmenupage('none');
        }
    }

    function profilePage(){
        profilepage == 'none' ? setprofilepage('initial'):setprofilepage('none');
        if(menupage!='none'){
            setmenupage('none');
        }
    }

    function displaymenupage(){
        menupage=='none'?setmenupage("block"):setmenupage('none');
        if(profilePage !='none'){
            setprofilepage('none');
        }
    }

    return(
        <>
            <div className="navbar">
                <img src="../src/accets/icons/room.png" alt="logo" className='room' />
                <span>Find<span>Rooms</span></span>
                
                <input type="text" placeholder='search rooms and hotels' />
                <img src="../src/accets/icons/search.svg" alt="search" className='search' />
                <button
                    onClick={callLoginPage}
                    style={{
                        position:"absolute",
                        top:"10px",
                        right:"13%",
                        backgroundColor:" #ffffffff",
                        color:"black"
                        }}
                >Login</button>
                
                <img src="../src/accets/icons/profile.png" alt="img" onClick={profilePage} className='profileIcon' />
                <img src="../src/accets/icons/bar.png" alt="bar" onClick={displaymenupage} className='barimg'/>
            </div>

            <LoginPage setStyle={{display:loginpage}} />
            <Profile style={{display:profilepage}}/>
            <MenuBar style={{display:menupage}}/>


        </>
    );
}

export default NavBar;