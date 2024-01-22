import PropTypes from "prop-types";

export const Lights = ({children}) => {
    return (
        <div className="lights">
            {children}
        </div>
    )
}

Lights.propTypes = {
    children: PropTypes.node
}