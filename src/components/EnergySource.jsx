import PropTypes from "prop-types";
import {EnergyIcon} from "./EnergyIcon.jsx";

export const EnergySource = ({image, description, value, type}) => {
    return (
        <div className="energy__source">
            <EnergyIcon icon={image} alt={description} />
            <div className="energy__consumption">
                <div className="energy__description">{description}</div>
                {type === 'water'
                    ? <div className="energy__value">{value} m<sup>3</sup></div>
                    : <div className="energy__value">{value} kW</div>
                }
            </div>
        </div>
    )
}

EnergySource.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
}