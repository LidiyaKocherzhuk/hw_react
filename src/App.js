import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import {Episodes} from "./pages/Eposodes/Episodes";
import {Characters} from "./pages/Characters/Characters";
import {EpisodesPage2} from "./pages/EpisodesPage2/EpisodesPage2";
import {EpisodesPage3} from "./pages/EpisodesPage3/EpisodesPage3";
import {Layout} from "./components/Layout/Layout";


function App() {


    return (
        <>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Episodes namber={{page: '1', prev: '', next: '2'}}/>}/>
                    <Route path="/page1"
                           element={<Episodes namber={{page: '1', prev: '', next: '2'}}/>}/>
                    <Route path="/episode" element={<Characters/>}/>
                    <Route path="/page2" element={<EpisodesPage2/>}/>
                    <Route path="/page3" element={<EpisodesPage3/>}/>
                </Route>

            </Routes>


        </>
    );
}

export default App;
