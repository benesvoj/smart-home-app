import {energyData} from "../utils/data.js";
import {EnergySource} from "./EnergySource.jsx";

export const Energy = () => {
    return (
        <div className="energy">
            {energyData.map((item, index) => (
                    <EnergySource key={index} image={item.imageSrc} description={item.description} type={item.type} value={item.value} />
                )
            )}
            {/*<div className="energy__source">*/}
            {/*    <div className="energy__icon">*/}
            {/*        <img src="/assets/images/electricity.svg" alt={"electricity"} />*/}
            {/*    </div>*/}
            {/*    <div className="energy__consumption">*/}
            {/*        <div className="energy__description">Elektřina</div>*/}
            {/*        <div className="energy__value">36.7 kW</div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="energy__source">*/}
            {/*    <div className="energy__icon">*/}
            {/*        <img src="/assets/images/water.svg" alt={"water"} />*/}
            {/*    </div>*/}
            {/*    <div className="energy__consumption">*/}
            {/*        <div className="energy__description">Voda</div>*/}
            {/*        <div className="energy__value">14.1 m<sup>3</sup></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}