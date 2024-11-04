import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Home } from "./routes/HomeScreen"
import { PropertyDetailContainer } from "./components/PropertyDetailContainer"
import { ListContainer } from "./components/ListContainer"

export const RealStateApp = () => {
  return (
    <>
        <NavBar></NavBar>       
        <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/transaction/:idTransaction" element={<ListContainer />} />
              <Route path="/transaction/:idTransaction/:idType" element={<ListContainer />} />
              <Route path="/property/:id" element={<PropertyDetailContainer />} />
            </Route>
        </Routes>
        <Footer></Footer>
    </>
  )
}
