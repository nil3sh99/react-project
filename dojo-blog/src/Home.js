import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'a', body: 'abc', author: 'A', id: 1},
        {title: 'b', body: 'abc', author: 'B', id: 2},
        {title: 'c', body: 'abc', author: 'A', id: 3}
    ]);

    const [lastDeletedBlog, setLastDeletedBlog] = useState([
        {title: '', body: ' ', author: '', id: null}
    ])
    console.log(blogs);
    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(x => x.id !== id);
        const lastDeletedBlog = blogs.filter(x => x.id === id);
        setLastDeletedBlog(lastDeletedBlog);
        setBlogs(newBlogs);
        
    }

    return ( 
        <div className = "home">           
           <BlogList blogProp = {blogs} title = "All Blogs" handleDeleteProp={handleDelete}></BlogList>
           {/* Useful when we want to do search filter */}
           {/* <BlogList blogProp = {blogs.filter((blog) => blog.author === 'A')} title = "A's Blogs"></BlogList> */}
           <BlogList blogProp = {lastDeletedBlog} title = "Last Deleted Blog"></BlogList>

        </div>
    );
}

export default Home;