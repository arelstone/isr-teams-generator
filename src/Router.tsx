import { Route, Routes } from "react-router"
import { Draw } from "./Pages/Draw/Draw"
import { QualficationTimes } from "./Pages/QualificationTimes/QualficationTimes"

export const Router = () => {
    return <Routes>
        <Route path="/" element={<QualficationTimes />} />
        <Route path="/draw" element={<Draw />} />
    </Routes>
}