import { Outlet, Navigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectToken} from "../../features/login-slice/loginSlice";


/**
 * ProtectedRoute component
 * @component
 * @returns {JSX.Element} 
 */
const ProtectedRoute = () => {

  let token = useSelector(selectToken)

  return (
    token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute