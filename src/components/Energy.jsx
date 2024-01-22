import PropTypes from "prop-types";
import {EnergySource} from "./EnergySource.jsx";

export const Energy = ({energyData}) => {
    return (
        <div className="energy">
            {energyData.map((item, index) => (
                    <EnergySource key={index} image={item.imageSrc} description={item.description} type={item.type} value={item.value} />
                )
            )}
        </div>
    )
}

Energy.propTypes = {
    energyData: PropTypes.array.isRequired
}