import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='bg-[#0a4d68] max-h-dvh flex justify-center items-center'>
    <Outlet />
    </div>
  )
}

export default AuthLayout