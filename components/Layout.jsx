import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
        <Sidebar />
        <Header />
        <div className="ml-80 mt-16 border-4">
            {children}
        </div>
    </div>
  )
}

export default Layout