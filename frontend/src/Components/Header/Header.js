import React ,{ Component }from 'react';
import '../Header/Header.css';

class Header extends Component {
    render() {
        return(
          <div className="Header"> 
          <a href="#" id="logo"onClick={this.props.HomePageFunc} ><i  class="fab fa-squarespace" ></i>Space</a>
           <input id="Search-Bar" type="text" placeholder="Search For A Blog"></input>
           {/* <a id="Profile-Tag"><i class="fas fa-user"></i></a> */}
           <button class="btn-signup" onClick={this.props.signupFunc}>Sign Up</button>
           <button class="btn-signin" onClick={this.props.loginFunc}>Log In</button>
          </div>
          
        )
    }
}
export default Header;