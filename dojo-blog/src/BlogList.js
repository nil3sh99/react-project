const BlogList = ({blogProp, title, handleDeleteProp}) => {
    //props is the object and we are using this object to link to a certain key from props parent
    // const blogs = props.blogProp;
    // const title = props.title;
    // const handleDelete = props.deleteProp;
    // const handleArchive = props.archiveProp;


    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogProp.map(blog => (
               <div className="blog-preview" key={blog.id}>
                   
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <button onClick={() => handleDeleteProp(blog.id)}>Delete blog</button>
                   
               </div>
           ))}
        </div>
    );
}
 
export default BlogList;
