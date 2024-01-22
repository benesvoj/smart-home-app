import PropTypes from "prop-types";
import {Light} from "./Light.jsx";

export const Lights = ({lightsData}) => {
    return (
        <div className="lights">
            {lightsData.map((light, index) => {
                return (
                    <Light
                        key={index}
                        isOn={light.lightState}
                        placeName={light.lightTitle}
                    />
                )
            })}
        </div>
    )
}

Lights.propTypes = {
    lightsData: PropTypes.array.isRequired
}