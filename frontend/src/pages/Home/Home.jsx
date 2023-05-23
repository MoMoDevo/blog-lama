 import Blogs from "../../components/blogs/Blogs"
import Banner from "../../components/nav/banner/Banner"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Banner/>
      <Blogs/>
    
    </div>
  )
}

export default Home