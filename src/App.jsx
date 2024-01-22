import {Dashboard} from "./components/Dashboard.jsx";
import {mockData} from "./utils/data.js";

function App() {

  return (
      <div className="container">
          <header className="header">
              <h1 className="header__title">Chytrý dům</h1>
          </header>
          <Dashboard data={mockData} />
      </div>
  )
}

export default App
