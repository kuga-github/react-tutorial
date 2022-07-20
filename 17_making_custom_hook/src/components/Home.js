import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    /// エラーメッセージ
    if (error) return <div className="Home">Error: {error.message}</div>;

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="すべての投稿" />
            {isPending && <div>ロード中です…</div>}
        </div>
    );
}

export default Home;