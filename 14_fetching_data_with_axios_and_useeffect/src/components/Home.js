import { useState, useEffect} from 'react'
import BlogList from './BlogList'
import axios from 'axios'

const Home = () => {
    /// useState
    const [blogs, setBlog] = useState([]);

    /// useEffect
    const db = axios.create({baseURL: "http://localhost:8000/blogs"});

    const fetchData = async() => await db.get('');

    useEffect(() => {
        fetchData().then((response) => {
            setBlog(response.data)
            console.log(response.data)
        });
    }, []);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="すべての投稿" />
        </div>
    );
}

export default Home;