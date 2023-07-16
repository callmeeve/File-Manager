import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import { Typography } from "@material-tailwind/react"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
        <Sidebar />
        <Header />
        <div className="ml-80 mr-5 mt-10">
        <Typography variant="h5">Files</Typography>
            {children}
        </div>
    </div>
  )
}

export default Layout