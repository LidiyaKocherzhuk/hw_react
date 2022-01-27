import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

import './Episodes.css';
import {apiPage} from "../../services/api.service";
import {Episode} from "../../components/Episode/Episode";

const Episodes = ({namber:{page,prev, next}}) => {

    const navigate = useNavigate()
    const [episode, setEpisode] = useState({})
    const [results, setResults] = useState([])

    useEffect(() => {
       apiPage.getPage(page).then(value => {
           setEpisode(value)
           setResults(value.results)
       })
    }, [])

    const btnNext = () => {
        if (next){
      navigate(`/page${next}`,{replace: true})
        }
    }

    function btnPrev() {
        if (prev){
        navigate(`/page${prev}`,{replace: true})
        }
    }

    return (
        <div className={'page1'}>

            <div className={'menu'}><h1>Rick and Morty Episodes</h1></div>

            <div className={'episodes'}>{results.map(value => <Episode key={value.id} item={value} epiItem={episode}/>)}</div>

            <div className={'btn'}>
                <button onClick={btnPrev}>Prev</button>
                <button onClick={btnNext}>Next</button>
            </div>

        </div>
    );
};

export {Episodes};