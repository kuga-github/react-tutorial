import {Link} from 'react-router-dom';

const Navber = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="new-blog">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navber;