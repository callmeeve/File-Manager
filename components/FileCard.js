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

export default function FileCard() {
  return (
    <Card className="mt-6 w-72 rounded-md">
      <CardBody>
        <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          Because it's about motivating the doers. Because I'm here to follow my
          dreams and inspire others.
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-start p-3 my-2W">
        <Button size="sm" variant="text">
          <ArrowDownTrayIcon className="w-6 h-6" />
        </Button>
        <Button size="sm" variant="text">
          <HeartIcon className="w-6 h-6" />
        </Button>
      </CardFooter>
    </Card>
  );
}
