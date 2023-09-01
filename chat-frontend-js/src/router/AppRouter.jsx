import { Navigate, Route, Routes } from "react-router-dom"
import { ChatPage } from "../pages/ChatPage"
import { AuthRouter } from "./AuthRouter"
import { useSelector } from "react-redux"



export const AppRouter = () => {

  const { status } = useSelector((state) => state.auth);
  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/" element={ <ChatPage/> }/>
          : <Route path="/auth/*" element={ <AuthRouter/> }/>
        }
        <Route path="/*" element={<Navigate to='/auth/login'/>}/>
    </Routes>
  )
}
