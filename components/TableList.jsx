import { PencilIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Amount", "Date"];

const TABLE_ROWS = [
    {
        name: "Spotify",
        amount: "$2,500",
        date: "Wed 3:00pm",
    },
    {
        name: "Amazon",
        amount: "$5,000",
        date: "Wed 1:00pm",
    }
];

export default function Example() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Recent Transactions
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            These are details about the last transactions
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
                        </div>  
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ name, amount, date}, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {amount}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {date}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" color="blue-gray" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" color="blue-gray" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" color="blue-gray" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" color="blue-gray" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
}