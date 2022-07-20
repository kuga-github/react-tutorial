import {Navber, Home, About, BlogDetail, Create} from './components/index.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
        <BrowserRouter>
          <div className='App'>
            <Navber />
            <div className='content'>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route path="new-blog" element={<Create />}/>
                <Route path="blog/:id" element={<BlogDetail />}/>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
    
  );
}

export default App;
