import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import Content from "@/components/Content";
import Link from "next/link";

export default function Example() {
    return (
        <Card color="blue" variant="gradient" className="z-50 fixed left-0 top-0 h-screen w-72 shadow-xl shadow-blue-gray-900/5 rounded-none">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="white" className="uppercase border-b pb-3">
                    Google Gak Drive
                </Typography>
            </div>
            <List className="text-white uppercase">
                <ListItem>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/dashboard">Dashboard</Link>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href="/folder-saya">Folder Saya</Link>
                </ListItem>
                <ListItem className="bg-red-500 text-white">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
    );
}