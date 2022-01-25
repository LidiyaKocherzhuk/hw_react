import {NavLink, Route, Routes} from "react-router-dom";

import './App.css';
import Users from "./pages/Users/Users";
import UserDetail from "./pages/UserDetail/UserDetail";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import UserPosts from "./pages/UserPosts/UserPosts";
import Posts from "./pages/Posts/Posts";
import PostDetail from "./pages/PostDetail/PostDetail";
import Comments from "./pages/Comments/Comments";

function App() {
  return (
      <div className="App">

        <div className={'menu'}>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/posts'>Posts</NavLink>
        </div>

        <div className={'page'}>
          <Routes>
            <Route path={'users'} element={<Users/>}>
              <Route path={':id'} element={<UserDetail/>}>
                <Route path={'post'} element={<UserPosts/>}/>
              </Route>

              <Route path={':userId/albums'} element={<Albums/>}>
                <Route path={':albumId/photos'} element={<Photos/>}/>
              </Route>
            </Route>

            <Route path={'posts'} element={<Posts/>}>
              <Route path={':id'} element={<PostDetail/>}>
                <Route path={'comments'} element={<Comments/>}/>
              </Route>
            </Route>
          </Routes>
        </div>

      </div>
  );
}

export default App;
