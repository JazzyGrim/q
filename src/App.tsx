import './Reset.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/';
import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='posts' element={<Posts />} />
        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
