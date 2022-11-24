import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {

  let token = useSelector()

  return (
    token ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute