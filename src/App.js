import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"
import Orderreview from "./components/OrderReview/OrderReview"
import Inventory from "./components/inventrory/Inventory"
import Notfound from "./components/notFound/Notfound"

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <Orderreview></Orderreview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
