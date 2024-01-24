import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddPost from './components/AddPost';
import PostList from './components/PostList'
import ShowList from './components/ShowList';
import UpdatePost from './components/UpdatePost';
import SignUp from './components/SignUp';
import Login from './components/LogIn';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList/>} />
          <Route path="/addpost" element={<AddPost/>} />
          <Route path="showlist/:postId" element={<ShowList/>} />
          <Route path="UpdatePost/:postId" element={<UpdatePost/>} />
          <Route path="/sign_up" element={<SignUp/>} />
          <Route path="/log_in" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
