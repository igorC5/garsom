import { Route, Routes } from "react-router-dom";
import Start from "./pages/start";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Start />}/>
        </Routes>
    )
}