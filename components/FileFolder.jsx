import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
    Tooltip,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from '@material-tailwind/react'
import { useState } from 'react'

import { FaTrash, FaPencilAlt } from "react-icons/fa"
import { FcImageFile, FcDocument, FcBarChart } from "react-icons/fc"
import { RiFileExcel2Fill } from "react-icons/ri"

const FileFolder = ({ title, typeFile, handleDelete }) => {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
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
                        <IconButton onClick={handleOpen} color='blue' variant='outlined' size='sm'>
                            <FaPencilAlt size={15}/>
                        </IconButton>
                    </Tooltip>
                    <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Edit Folder</DialogHeader>
                            <DialogBody divider>
                                <Input />
                            </DialogBody>
                        </Dialog>
                    <Tooltip content='Hapus'>
                        <IconButton onClick={handleDelete} color='red' variant='outlined' size='sm'>
                            <FaTrash size={15} />
                        </IconButton>
                    </Tooltip>
                </div>
            </CardBody>
        </Card>
    )
}

export default FileFolder