import PropTypes from "prop-types";
import {useState} from "react";

export const Blinds = ({blindsData}) => {

    const isBlindsOpen = blindsData.isOpen ? 'blinds-open' : 'blinds-closed'

    const [blinds, setBlinds] = useState(isBlindsOpen)

    const openBlinds = () => {
        setBlinds('blinds-open')
    }

    const closeBlinds = () => {
        setBlinds('blinds-closed')
    }

    const activeOpenButton = blinds === 'blinds-open' ? 'button button--active' : 'button'
    const activeCloseButton = blinds === 'blinds-closed' ? 'button button--active' : 'button'
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={`/assets/images/${blinds}.svg`} alt={"blinds"}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={activeOpenButton} onClick={openBlinds}>Otevřeno</button>
                <button className={activeCloseButton} onClick={closeBlinds}>Zavřeno</button>
            </div>
        </div>
    )
}

Blinds.propTypes = {
    blindsData: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired
    }).isRequired
};