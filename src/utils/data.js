import PropTypes from "prop-types";

export const mockData = {
    lightsData: [
        {
            lightTitle: 'Obývací pokoj',
            lightState: false
        },
        {
            lightTitle: 'Ložnice',
            lightState: true
        },
        {
            lightTitle: 'Kuchyně',
            lightState: true
        },
        {
            lightTitle: 'Chodba',
            lightState: false
        }
    ],
    energyData: [
        {
            description: 'Elektřina',
            imageSrc: '/assets/images/electricity.svg',
            value: 36.7,
            type: 'electricity',
        },
        {
            description: 'Voda',
            imageSrc: '/assets/images/water.svg',
            value: 14.1,
            type: 'water',
        }
    ],
    climateData: [
        {
            type: 'temperature',
            value: 24,
        },
        {
            type: 'humidity',
            value: 51,
        }
    ],
    blindsData: {
        isOpen: true
    }
}

mockData.PropTypes = {
    lightsData: PropTypes.arrayOf(PropTypes.shape({
        lightTitle: PropTypes.string.isRequired,
        lightState: PropTypes.bool.isRequired
    })),
    energyData: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    })),
    climateData: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })),
    blindsData: PropTypes.shape({
        isOpen: PropTypes.bool.isRequired
    })
}