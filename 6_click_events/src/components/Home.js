const Home = () => {

    const handleClick = (e) => {
        console.log('押してくれてありがとう！', e.target)
    }
    return (
        <div className="content">
            <h2>これはホームページです</h2>
            <button onClick={ handleClick }>Click me</button>
        </div>
    );
}

export default Home;