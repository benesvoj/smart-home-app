import PropTypes from "prop-types";
import {useState} from "react";

export const Light = ({isOn, placeName}) => {
    const [lightOn, setLightOn] = useState(isOn)

    const lightState = lightOn ? "light-on" : "light-off";
    const lightIcon = `/assets/images/${lightState}.svg`


    const toggleLight = () => {
        setLightOn(!lightOn)
        console.log(lightOn)
    }

    return (
        <div className="light" onClick={toggleLight}>
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