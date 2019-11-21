import React ,{ Component }from 'react';
import BlogCard from '../BlogCards/BlogCards';


class HomePage extends Component {
    render() {
        return(         
          <React.Fragment>
           <BlogCard/>
           <BlogCard/>
           <BlogCard/>
           <BlogCard/>
          </React.Fragment>
        )
    }
}
export default HomePage;