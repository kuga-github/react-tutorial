import { useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    /// useState
    const [blogs, setBlog] = useState([]);

    /// useEffect
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            setBlog(data);
        });
    }, []);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="すべての投稿" />
        </div>
    );
}

export default Home;