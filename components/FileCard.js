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
  PencilSquareIcon,
} from "@heroicons/react/24/solid";


const FileCard = ({ files }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-x-6 gap-y-2">
      {files.map((file) => (
        <Card className="mt-6 w-72 h-auto rounded-md" key={file.id}>
          <CardBody>
            <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
            <Typography color="blue-gray" className="mb-2">
              {file.nama_file}
            </Typography>
            <Typography variant="paragraph">{file.tgl_upload}</Typography>
            <Typography variant="paragraph">{file.user.email}</Typography>
          </CardBody>
          <CardFooter className="flex flex-row justify-start p-3 my-2">
            <Button size="sm" variant="text">
              <PencilSquareIcon className="w-6 h-6" />
            </Button>
            <Button size="sm" variant="text">
              <ArrowDownTrayIcon className="w-6 h-6" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FileCard;
