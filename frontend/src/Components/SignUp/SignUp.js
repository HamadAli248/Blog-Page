import React ,{ Component }from 'react';
import '../SignUp/SignUp.css';

class SignUp extends Component {
    render() {
        return(
        <div className="form">
            <h2>Sign Up Form for Space </h2>
        <form id="signup-form">
            <div class="signup-row">
                <div class="signup-label">
                  <label>First Name:</label>
                </div>
                <div class="signup-input">
                  <input id="signup-box" type="text"/>      
                </div>
            </div>

            <div class="signup-row">
                <div class="signup-label">
                  <label> Last Name:</label>
                </div>
                <div class="signup-input">
                  <input id="signup-box"  type="text"/>      
                </div>
            </div>
  
            <div class="signup-row">
                <div class="signup-label">
                   <label>Date Of Bith:</label>
                </div>
                <div class="signup-input">
                   <input id="signup-box"  type="date"/>      
                </div>
            </div>
  
            <div class="signup-row">
                <div class="signup-label">
                    <label> Email:</label>
                </div>
                <div class="signup-input">
                    <input id="signup-box" type="email"/>      
                </div>
             </div>

             <div class="signup-row">
                <div class="signup-label">
                    <label> Phone:</label>
                </div>
                <div class="signup-input">
                    <input id="signup-box" type="number" />      
                </div>
             </div>

             
             <div class="signup-row">
                <div class="signup-label">
                    <label> UserName:</label>
                </div>
                <div class="signup-input">
                    <input id="signup-box" type="text" />      
                </div>
             </div>

             
             <div class="signup-row">
                <div class="signup-label">
                    <label> Password:</label>
                </div>
                <div class="signup-input">
                    <input  id="signup-box" type="Password"/>      
                </div>
             </div>

             
             <div class="signup-row">
                <div class="signup-label">
                    <label> Retype Password:</label>
                </div>
                <div class="signup-input">
                    <input id="signup-box" type="password"/>      
                </div>
             </div>
  
            <div class="submit-btn">
                <button>Submit</button>
            </div>
        </form>
        </div>
        
        )
    }
}
export default SignUp;