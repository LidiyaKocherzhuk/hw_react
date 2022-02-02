import './App.css';
import {Route, Routes} from "react-router-dom";
import {Episodes} from "./pages/Eposodes/Episodes";
import {Characters} from "./pages/Characters/Characters";
import {Layout} from "./components/Layout/Layout";


function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Episodes/>}/>
                    <Route path="/page1"
                           element={<Episodes/>}/>
                    <Route path="/episode" element={<Characters/>}/>
                </Route>
            </Routes>

        </>
    );
}

export default App;
