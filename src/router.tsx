import { BrowserRouter, Route, Routes } from "react-router-dom";
import Processor from "./views/ProcessorsView";
import RamsView from "./views/RamsView";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import GpuView from "./views/GpuView";
import PsuView from "./views/PsuView";
import StorageView from "./views/StorageView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AppLayout />}>
                    <Route path="/" element={<DashboardView />} />
                    <Route path="/processor" element={<Processor />} />
                    <Route path="/rams" element={<RamsView />} />
                    <Route path="/gpu" element={<GpuView />} />
                    <Route path="/psu" element={<PsuView />} />
                    <Route path="/storage" element={<StorageView />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}
