import { Outlet, Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectToken} from "../../features/login-slice/loginSlice";


const ProtectedRoute = () => {

  let token = useSelector(selectToken)

  return (
    token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute