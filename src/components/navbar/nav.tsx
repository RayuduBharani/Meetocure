import Logo from "../Icons/Logo"
import Navitems from "./navItems"
import Navsheet from "./navSheet"
export default function NavBar({ role }: { role: string }) {

  return (
    <div className="w-full flex sm:px-5 px-2 justify-between py-4">
      <div className="w-auto h-fit">
        <Logo className="max-sm:w-37 h-auto" size={160} />
      </div>
      <div className="flex sm:gap-5">
        <Navitems role={role} />
        <Navsheet role={role}  />
      </div>
    </div>
  )
}