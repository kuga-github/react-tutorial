import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
 
const BlogDetail = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    /// history
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.delete(`http://localhost:8000/blogs/${id}`)
        .catch(errors => error=errors)
        .then(() => navigate("/"));
    }

    if (error) return <div className="Home">Error: {error.message}</div>;

    if (isPending) return <div>ロード中です…</div>

    return (
        <div className="blog-detail">
            <h2>{blog.title}</h2>
            <p>投稿者: {blog.author}</p>
            <p>{blog.body}</p>
            <Button onClick={() => handleSubmit()}>削除</Button>
        </div>
    );
}

export default BlogDetail;