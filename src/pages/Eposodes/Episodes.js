import React, {useEffect, useState} from 'react';

import './Episodes.css';
import {apiPage} from "../../services/api.service";
import {Episode} from "../../components/Episode/Episode";

const Episodes = () => {

    const [episode, setEpisode] = useState({})
    const [results, setResults] = useState([])
    let [pages, setPages] = useState(1);

    useEffect(() => {
        apiPage.getPage(pages).then(value => {
            setEpisode(value)
            setResults(value.results)
        })
    }, [pages]);


    const btnNext = () => {
        setPages(pages + 1)
    }

    function btnPrev() {
        setPages(pages - 1)
    }

    return (
        <div className={'page1'}>

            <div className={'menu'}><h1>Rick and Morty Episodes</h1></div>

            <div className={'episodes'}>{results.map(value => <Episode key={value.id} item={value}
                                                                       epiItem={episode}/>)}</div>

            <div className={'btn'}>
                <button onClick={btnPrev}>Prev</button>
                <button onClick={btnNext}>Next</button>
            </div>

            <div className={'footer'}>Page-{pages}</div>

        </div>
    );
};

export {Episodes};