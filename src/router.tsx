import { BrowserRouter, Route, Routes } from "react-router-dom";
import Processor from "./views/ProcessorsView";
import RamsView from "./views/RamsView";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} />
                    <Route path="/processor" element={<Processor />} />
                    <Route path="/rams" element={<RamsView />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}
