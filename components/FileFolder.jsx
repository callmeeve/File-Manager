import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
    Tooltip
} from '@material-tailwind/react'

import { FaTrash } from "react-icons/fa"

const FileFolder = () => {
    return (
        <Card className="mt-6 w-72 relative">
            <CardHeader floated={false} shadow={false} color="blue-gray" className="relative h-36">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="img-blur-shadow"
                />
            </CardHeader>
            <CardBody className='flex justify-between items-center gap-x-5'>
                <Typography variant="p" color="blue-gray" className="truncate mb-2 w-3/4">
                    1122000541 - Achmad Zaki F - UTS
                </Typography>
                <Tooltip content='Hapus'>
                    <IconButton color='red' variant='outlined' size='sm'>
                        <FaTrash size={15} />
                    </IconButton>
                </Tooltip>
            </CardBody>
        </Card>
    )
}

export default FileFolder