import {useEffect, useState} from "react";

import SpaceXMission from "../SpaseXMission/SpaceXMission";


export default function SpaceXMissions() {

    const [spaceXMissions, setSpaceXMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(mission => {
                    let missionFilter = mission.filter(value => value.launch_year !== "2020")
                    setSpaceXMissions(missionFilter)
                }
            )
    }, [])

    return (
        <div className={'missions'}>

            {spaceXMissions.map((value, index) => <SpaceXMission key={index}
                                                                 mission_name={value.mission_name}
                                                                 launch_year={value.launch_year}
                                                                 mission_patch_small={value.links.mission_patch_small}
                />
            )}

        </div>
    );
};