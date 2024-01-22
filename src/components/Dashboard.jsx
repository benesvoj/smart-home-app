import PropTypes from "prop-types";

export const Dashboard = ({children}) => {
    return (
        <main className="dashboard">
            {children}
        </main>
    )
}

Dashboard.prototype = {
    children: PropTypes.node
}