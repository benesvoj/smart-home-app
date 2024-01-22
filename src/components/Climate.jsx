import {useState} from "react";
import {climateData} from "../utils/data.js";

export const Climate = () => {
    const initialTemperature = climateData.filter(item => item.type === "temperature")[0].value

    const [temperature, setTemperature] = useState(initialTemperature)

    const increaseTemp = () => {
        setTemperature(temperature + 1)
    }
    const decreaseTemp = () => {
        setTemperature(temperature - 1)
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src="/assets/images/temp.svg" alt={"temperature"}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperature}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu 51&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button onClick={increaseTemp} className="button">+</button>
                <button onClick={decreaseTemp} className="button">-</button>
            </div>
        </div>
    )
}