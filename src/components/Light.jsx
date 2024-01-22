import PropTypes from "prop-types";

export const Light = ({isOn, placeName}) => {

    const lightState = isOn ? "light-on" : "light-off";
    const lightIcon = `/assets/images/${lightState}.svg`

    return (
        <div className="light">
            <div className="light__icon">
                <img src={lightIcon} alt={"Light state"}/>
            </div>
            <div className="light__name">
                {placeName}
            </div>
        </div>
    )
}

Light.propTypes = {
    isOn: PropTypes.bool.isRequired,
    placeName: PropTypes.string.isRequired
}