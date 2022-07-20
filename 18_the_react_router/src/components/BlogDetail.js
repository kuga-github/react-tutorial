import { useParams } from "react-router-dom";

const BlogDetail = () => {
    let {id} = useParams()
    return (
        <div className="blog-detail">
            <h2>id={id}</h2>
        </div>
    );
}

export default BlogDetail;