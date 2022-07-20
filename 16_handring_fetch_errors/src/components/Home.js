import { useState, useEffect} from 'react'
import BlogList from './BlogList'
import axios from 'axios'

const Home = () => {
    /// useState
    const [blogs, setBlog] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setErrors] = useState(null);

    /// useEffect
    // const db = axios.create({baseURL: "http://localhost:8000/blogs"});
    const db = axios.create({baseURL: "http://localhost:8000/vlogs"}); /// 間違ったURLを指定

    const fetchData = async() => await db.get('');

    useEffect(() => {
        fetchData()
        .then((response) => {
            setBlog(response.data);
        })
        .catch(error => setErrors(error));
        setIsPending(false);
    }, []);
    if (error) return <div className="Home">Error: {error.message}</div>;

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="すべての投稿" />
            {isPending && <div>ロード中です…</div>}
        </div>
    );
}

export default Home;