import "./blog.css"
 const allBlogs=[{"ïd":"1","title":"one","category":"oo","author":"abx","image":"https://th.bing.com/th/id/OIP.X_LeDD0f3Zx-RZGFiKZIjAHaJQ?w=157&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7",}]
const Blogs = () => {
  return (
    <div className='blogs'>
        {allBlogs.map((blog)=>(
            <div className="blog-contianer" key={blog.id}>
                <img src="https://th.bing.com/th/id/OIP.X_LeDD0f3Zx-RZGFiKZIjAHaJQ?w=157&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                <h5> {blog.title} </h5>
                <p>category:{blog.category} </p>
                <p>create by:{blog.author} </p>

                

            </div>


        ))}









    </div>
  )
}

export default Blogs