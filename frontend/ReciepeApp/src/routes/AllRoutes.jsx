import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Favourites from "../pages/Favourites"


function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<Favourites />} />
        </Routes>
    </div>
  )
}

export default AllRoutes