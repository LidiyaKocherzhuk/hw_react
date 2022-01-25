export default function SpaceXMission (props) {

    const {mission_name, launch_year, mission_patch_small} = props;

    return (
        <div className={'mission'}>
            <div><h2>{mission_name}</h2>
                <p>{launch_year}</p></div>
            <img src={mission_patch_small} alt={"mission_name"}/>
        </div>
    );
}