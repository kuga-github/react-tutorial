import { useState } from 'react'

const Home = () => {

    const [name, setName] = useState("ピカチュー");
    const [text, setText] = useState("進化");

    const handleClick = () => {
        if(name == "ピカチュー"){
            setName("ライチュー");
            setText("退化");
        }
        else{
            setName("ピカチュー");
            setText("進化");
        }
    }

    return (
        <div className="content">
            <h2>これはホームページです</h2>
            <p>{ name }</p>
            <button onClick={ handleClick }>{ text }</button>
        </div>
    );
}

export default Home;