import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import Home from "./pages/home"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/user-profile' element={<span>profile page </span>} />
        <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default AppRoutes