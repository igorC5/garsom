import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Start />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}