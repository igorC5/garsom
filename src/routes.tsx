import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start/start";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Login from "./pages/Start/Login";
import Register from "./pages/Start/Register/Register";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="Login" element={<Login />}/>
            <Route path="Register" element={<Register />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}