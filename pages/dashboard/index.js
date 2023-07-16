import FileCard from "@/components/FileCard"
import FileFolder from "@/components/FileFolder"
import Layout from "@/components/Layout"

const Dashboard = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3">
        <FileFolder />
        <FileFolder />
        <FileFolder />
        <FileFolder />
        <FileFolder />
        <FileFolder />
      </div>
    </Layout>
  )
}

export default Dashboard