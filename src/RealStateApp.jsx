import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { Home } from "./routes/HomeScreen"

export const RealStateApp = () => {
  return (
    <>
        <NavBar></NavBar>       
        <Routes>
            <Route>
              <Route path="/" element={<Home />} />
            </Route>
        </Routes>
        <Footer></Footer>
    </>
  )
}
