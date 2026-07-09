import "./ActivityBar.css";

import {
    VscHome,
    VscFiles,
    VscGraph,
    VscRobot,
    VscDatabase,
    VscSettingsGear
} from "react-icons/vsc";

function ActivityBar() {

    return (

        <div className="activity-bar">

            <div className="activity-icon">
                <VscHome size={24}/>
            </div>

            <div className="activity-icon">
                <VscFiles size={24}/>
            </div>

            <div className="activity-icon">
                <VscGraph size={24}/>
            </div>

            <div className="activity-icon">
                <VscRobot size={24}/>
            </div>

            <div className="activity-icon">
                <VscDatabase size={24}/>
            </div>

            <div className="activity-icon">
                <VscSettingsGear size={24}/>
            </div>

        </div>

    );

}

export default ActivityBar;