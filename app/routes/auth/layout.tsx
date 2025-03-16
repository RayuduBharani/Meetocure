import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='bg-black max-h-lvh flex justify-center items-center'>
    <Outlet />
    </div>
  )
}

export default AuthLayout