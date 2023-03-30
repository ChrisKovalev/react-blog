import { Link } from "react-router-dom";

const Bloglist = (props: any) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      <h2> {title} </h2>
       {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>

          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
    </div>
  );
}

export default Bloglist;