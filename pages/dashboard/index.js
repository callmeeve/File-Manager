import FileFolder from "@/components/FileFolder"
import Layout from "@/components/Layout"
import { data } from "@/Data"
import { useState } from "react"

const Dashboard = () => {
  const [user, setUSer] = useState(data)
  const handleDelete = (user_id) => {
    const newData = user.filter((item) => {
      return item.id !== user_id
    })
    setUSer(newData)
  }
  console.log(user)
  return (
    <Layout title="File Terbaru">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {user.map((item) => {
          return (
            <FileFolder
              key={item.id}
              title={item.name}
              typeFile={item.file.substring(item.file.lastIndexOf(".") + 1)}
              handleDelete={() => handleDelete(item.id)}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Dashboard