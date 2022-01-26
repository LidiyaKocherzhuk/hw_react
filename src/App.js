import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Episodes} from "./pages/Eposodes/Episodes";
import {Characters} from "./pages/Characters/Characters";
import {EpisodesPage2} from "./pages/EpisodesPage2/EpisodesPage2";
import {EpisodesPage3} from "./pages/EpisodesPage3/EpisodesPage3";


function App() {


    return (
        <div>
            
            <div className={'header'}><Link to={'/page1'}>Rick and Morty!</Link></div>

            <Routes>
                <Route path="/page1"
                       element={<Episodes namber={{page: '1', prev: '', next: '2'}}/>}/>
                <Route path="/episode" element={<Characters/>}/>
                <Route path="/page2" element={<EpisodesPage2/>}/>
                <Route path="/page3" element={<EpisodesPage3/>}/>

            </Routes>


        </div>
    );
}

export default App;
