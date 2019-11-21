import React ,{ Component }from 'react';
import '../BlogCards/BlogCards.css';



class BlogCard extends Component {
    render() {
        return(    
          <div className="Blog-Card">
            <div className="Blog-Image">
            <img src="https://winatweb.com/wp-content/uploads/2019/04/what-is-a-blog.png" alt="Blog-Image" height="200px" width="400px"/>      
            </div>
            <div className="Blog-Text">
              <div className="BlogCard-Title">
                <h3 >This is the Title of my Blog Card!!!</h3>
              </div>
              <div className="BlogCard-Info">
                <p>This is some brief of what the will blog about!!at the will blog about!!!!</p>
              </div>
            </div>
            
          </div>   
        )
    }
}
export default BlogCard;