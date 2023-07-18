import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import { Chip, Typography } from "@material-tailwind/react"

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen">
        <Sidebar />
        <Header />
        <div className="ml-80 mr-5 mt-20">
          <Chip value={title} variant="ghost" className="w-max" />
            {children}
        </div>
    </div>
  )
}

export default Layout