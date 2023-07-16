import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
    Tooltip
} from '@material-tailwind/react'

import { FaTrash, FaPencilAlt } from "react-icons/fa"
import { FcImageFile, FcDocument, FcBarChart } from "react-icons/fc"
import { RiFileExcel2Fill } from "react-icons/ri"

const FileFolder = ({ title, typeFile }) => {
    return (
        <Card className="mt-6 w-72 relative">
            <CardHeader floated={false} shadow={false} className="border relative flex items-center justify-center h-36">
                {
                    typeFile === "pdf" || typeFile === "docx" ?
                    // output
                    <FcDocument size={35} />
                    :
                    (typeFile === "xlsx" ?
                        <RiFileExcel2Fill size={33} className='text-teal-500' />
                        :
                    <FcImageFile size={35} />)
                }
            </CardHeader>
            <CardBody className='flex justify-between items-center gap-x-5'>
                <Typography variant="paragraph" color="blue-gray" className="truncate mb-2 w-3/4">
                    {title}
                </Typography>
                <div className='flex items-center gap-x-2'>
                    <Tooltip content='Edit'>
                        <IconButton color='blue' variant='outlined' size='sm'>
                            <FaPencilAlt size={15}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip content='Hapus'>
                        <IconButton color='red' variant='outlined' size='sm'>
                            <FaTrash size={15} />
                        </IconButton>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

export default FileFolder