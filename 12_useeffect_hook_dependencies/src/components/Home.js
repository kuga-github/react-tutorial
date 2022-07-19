import { useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlog] = useState([
        {title: "初投稿", body: "はじめまして！", author: "kappa", id: 1},
        {title: "二回目の投稿", body: "二回目の投稿です", author: "kappa", id: 2},
        {title: "映画レビュー", body: "映画を見ました！", author: "kappa", id: 3}
    ]);

    const f = (state) => {
        const list = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
        do{
            const res = list[Math.floor(Math.random()*7)];
            if(state !== res) return res
        }while(1)
    }
    const [fortune, setFortune] = useState("");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlog(newBlogs)
    }

    useEffect(() => {
        console.log("UseEffect run");
    }, [fortune]);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="すべての投稿" handleDelete={handleDelete}/>
            <button onClick={() => setFortune(f(fortune))}>今日の運勢を占う</button>
            <p>{fortune}</p>
        </div>
    );
}

export default Home;