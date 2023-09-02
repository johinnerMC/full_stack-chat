import { Navigate, Route, Routes } from "react-router-dom"
import { ChatPage } from "../pages/ChatPage"


export const ChatRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< ChatPage/>} />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
