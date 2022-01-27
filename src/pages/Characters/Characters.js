import {useLocation} from "react-router-dom";

import "./Characters.css"
import {Character} from "../../components/Character/Character";

const Characters = () => {

    const {state} = useLocation();
    console.log(state.characters)

    return (
        <div>

            <div className={'charactersHeader'}>
                <div>
                    <h2>{state.name}</h2>
                    <h3><strong>Episode:</strong> {state.episode}</h3>
                    <h3><strong>Air date:</strong> {state.air_date}</h3>
                </div>
            </div>

            <div className={'characters'}>
                {state.characters.map(value => <Character key={value} item={value}/>)}
            </div>

        </div>
    );
};

export {Characters};