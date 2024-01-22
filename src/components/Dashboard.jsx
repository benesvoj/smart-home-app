import PropTypes from "prop-types";
import {Lights} from "./Lights.jsx";
import {Climate} from "./Climate.jsx";
import {Blinds} from "./Blinds.jsx";
import {Energy} from "./Energy.jsx";

export const Dashboard = ({data}) => {
    return (
        <main className="dashboard">
            <Lights lightsData={data.lightsData}/>
            <Climate climateData={data.climateData}/>
            <Blinds blindsData={data.blindsData}/>
            <Energy energyData={data.energyData}/>
        </main>
    )
}

Dashboard.propTypes = {
    data: PropTypes.object.isRequired
}