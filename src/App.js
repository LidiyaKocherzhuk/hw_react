import './App.css';
import {useEffect, useState} from "react";
import {apiService} from "./services/api.service";

function App() {

  const [episode,setEpisode] = useState({})
  useEffect(()=>{
    apiService.getEpisode().then(value => setEpisode(value.results))
  },[])
  console.log(episode)

  return (
    <div>

      {/*{results.map(value => <h2>{value.id} {value.name}</h2> )}*/}

    </div>
  );
}

export default App;
