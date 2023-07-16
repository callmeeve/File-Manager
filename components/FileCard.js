import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  ArrowDownTrayIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const FileCard = ({files}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-x-6 gap-y-2">
    {files.map((file) => (
      <Card className="mt-6 w-72 rounded-md" key={file.id}>
        <CardBody>
          <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {file.nama_file}
          </Typography>
          <Typography>{file.tgl_upload}</Typography>
        </CardBody>
        <CardFooter className="flex justify-start p-3 my-2">
          <Button size="sm" variant="text">
            <ArrowDownTrayIcon className="w-6 h-6" />
          </Button>
          <Button size="sm" variant="text">
            <HeartIcon className="w-6 h-6" />
          </Button>
          <Typography>{file.user.email}</Typography>
        </CardFooter>
      </Card>
    ))}
  </div>
  );
}

export default FileCard;
