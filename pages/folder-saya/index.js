import FileFolder from '@/components/FileFolder'
import Layout from '@/components/Layout'

const index = () => {
  const dataFile = [
    {
      id: 1,
      name: "uts - 11004232",
      file: "asdasdsads.docx",
    },
    {
      id: 2,
      name: "uas - 112323 - achmad zaki",
      file: "sadsadsad.pdf",
    },
    {
      id: 3,
      name: "pemgroaman web",
      file: "adasdsa.jpg"
    },
    {
      id: 4,
      name: "pemgroaman web",
      file: "adasdsa.xlsx"
    },
  ]

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {dataFile.map((item) => {
          return (
            <FileFolder
              key={item.id}
              title={item.name}
              typeFile={item.file.substring(item.file.lastIndexOf(".") + 1)}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default index