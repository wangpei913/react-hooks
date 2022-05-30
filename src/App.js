import { BrowserRouter } from "react-router-dom";
import RouterWaiter from 'react-router-waiter';
import routes from './Route/routes'
import onRouteBefore from './Route/methods'

function App() {
  return (
    <BrowserRouter>
      <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} />
    </BrowserRouter>
  )
}

export default App