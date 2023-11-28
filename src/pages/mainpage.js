import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import "../assets/styles.css"
import SideText from '../components/sidetextcomponent';
import Login from '../components/login';
import SignUp from '../components/signup';
function Main() {
    const [Condiatioanl,setConditional] = useState(false)
  return (
    <div className='loginSignupFormStruct'>
     <div className='sidestruc'>
        <SideText/>
     </div>
     
     {Condiatioanl==true?<div  className='foremstruc'> <Login/></div>:
     <div  className='foremstruc'> <SignUp settrue={()=>setConditional(true)}/></div>}
    </div>
  );
}

export default Main;
