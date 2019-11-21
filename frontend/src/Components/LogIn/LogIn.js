import React ,{ Component }from 'react';
import '../LogIn/LogIn.css';

class LogIn extends Component {
    render() {
        return(
          <div className="login-Form">
              <form id="survey-form">
                <div class="row-tab">
                  <div class="label">
                    <label> UserName:</label>
                  </div>
                  <div class="input">
                    <input id="box" type="text"  />    
                  </div>
                </div>
                
                <div class="row-tab">
                  <div class="label">
                    <label> Password:</label>
                  </div>
                  <div class="input">
                    <input id="box"  type="password" />   
                  </div>
                </div>    
                <button className="login-Btn" type="submit">Log In</button>       
              </form>   
          </div>

        )
    }
}
export default LogIn;