
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog/CreateBlog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div className='mainDiv'>
      <Navbar></Navbar>
      <div className='mainContent'>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/create" element={<CreateBlog></CreateBlog>}></Route>
          <Route path="/blogs/:id" element={<BlogDetails></BlogDetails>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  ); 
}

export default App;
