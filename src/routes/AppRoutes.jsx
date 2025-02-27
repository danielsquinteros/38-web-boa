import { Route, Routes } from "react-router"
import App from "../App";
import TraficLight from "../components/organisms/TraficLight";
import Users from "../components/organisms/Users";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/trafic-light" element={<TraficLight />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    )
}

export default AppRoutes;