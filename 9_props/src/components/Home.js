import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

    const [blogs, setBlog] = useState([
        {title: "初投稿", body: "はじめまして！", author: "kappa", id: 1},
        {title: "二回目の投稿", body: "二回目の投稿です", author: "kappa", id: 2},
        {title: "映画レビュー", body: "映画を見ました！", author: "kappa", id: 3}
    ]);

    return (
        <BlogList blogs={blogs}/>
    );
}

export default Home;