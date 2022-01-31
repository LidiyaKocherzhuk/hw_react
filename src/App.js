import {Route, Routes} from "react-router-dom";

import './App.module.css';
import {Cars, Comments, Posts, Users} from "./pages";
import {Layout} from "./componetnts";

function App() {

  return (
    <div>

        <Routes>

            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Cars/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'posts'} element={<Posts/>}/>
                <Route path={'comments'} element={<Comments/>}/>
            </Route>

        </Routes>

    </div>
  );
}

export default App;
