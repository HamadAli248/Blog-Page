import React,{Component} from 'react';
import '../Footer/Footer.css'


class Footer extends Component {
    render() {
        return(
          <div className="footer">
              <a href="#" id="name-Links">Contact Us</a>
              <a href="#" id="name-Links">Terms and Conditions</a>
           
              <a target="_blank" href="https://en-gb.facebook.com/" ><i class="fab fa-facebook-square"></i></a>
              <a target="_blank" href="https://twitter.com/" ><i class="fab fa-twitter-square"></i></a>
              <a target="_blank" href="https://www.linkedin.com/" ><i class="fab fa-linkedin"></i></a>
          </div>
        )
    }
}
export default Footer;