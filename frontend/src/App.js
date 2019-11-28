import React, {useState} from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import LogIn from "./Components/LogIn/LogIn";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import SignUp from './Components/SignUp/SignUp';


function App() {
  const [loginState, setLogin] = useState({
    visible: false
  });
  const [signupState, setSignup] = useState({
    visible: false
  });
  const [HomePageState, setHomePage] = useState({
    visible: true
  });

  const showLogin = () => {
    setLogin({
      visible: true
    })
    setSignup({
      visible: false
    });
    setHomePage({
      visible: false
    });
  }

  const showSignup = () => {
    setSignup({
      visible: true
    });
    setLogin({
      visible:false
    })
    setHomePage({
      visible: false
    });
  }
  const showHomepage =() => {
    setHomePage({
      visible: true
    });
    setSignup({
      visible: false
    });
    setLogin({
      visible:false
    })
  }

  return (
    <React.Fragment>
      
      <Header loginFunc={showLogin} signupFunc={showSignup} HomePageFunc={showHomepage}/>
      
      <div className="main">
      { loginState.visible ?  <LogIn/>  : null }
      { signupState.visible ? <SignUp/> : null }
      { HomePageState.visible ? <HomePage/> : null }
      
      </div>
      <Footer/>
    </React.Fragment>
       
   
  );
}

export default App;