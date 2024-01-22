import {Dashboard} from "./components/Dashboard.jsx";
import {Lights} from "./components/Lights.jsx";
import {lightsData} from "./utils/data.js";
import {Light} from "./components/Light.jsx";
import {Climate} from "./components/Climate.jsx";
import {Blinds} from "./components/Blinds.jsx";
import {Energy} from "./components/Energy.jsx";

function App() {

  return (
    <Dashboard>
        <Lights>
            {lightsData.map((light, index) => {
                return (
                    <Light
                        key={index}
                        isOn={light.lightState}
                        placeName={light.lightTitle}
                    />
                )
            })}
        </Lights>
        <Climate />
        <Blinds />
        <Energy />
    </Dashboard>
  )
}

export default App
