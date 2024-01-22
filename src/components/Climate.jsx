export const Climate = () => {
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src="/assets/images/temp.svg" alt={"temperature"}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">24&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button">+</button>
                <button className="button">-</button>
            </div>
        </div>
    )
}