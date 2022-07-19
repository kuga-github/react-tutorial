import { useState } from 'react'

const Home = () => {

    const [blogs, setBlog] = useState([
        {title: "初投稿", body: "はじめまして！", author: "kappa", id: 1},
        {title: "二回目の投稿", body: "二回目の投稿です", author: "kappa", id: 2},
        {title: "映画レビュー", body: "映画を見ました！", author: "kappa", id: 3}
    ]);

    const handleClick = () => {
    }

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>投稿者 {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;