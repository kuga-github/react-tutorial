import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`);

    if (error) return <div className="Home">Error: {error.message}</div>;

    if (isPending) return <div>ロード中です…</div>

    return (
        <div className="blog-detail">
            <h2>{blog.title}</h2>
            <p>投稿者: {blog.author}</p>
            <p>{blog.body}</p>
        </div>
    );
}

export default BlogDetail;