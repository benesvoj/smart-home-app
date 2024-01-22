import PropTypes from "prop-types";

export const EnergyIcon = ({icon, description}) => {
    return (
        <div className="energy__icon">
            <img src={icon} alt={description || 'Image'} />
        </div>
    )
}

EnergyIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    description: PropTypes.string
}