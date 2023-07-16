import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Modals from "@/components/Modals"

import { MdDashboard } from "react-icons/md"

export default function Example() {
    return (
        <Card className="z-50 !bg-gray-900 fixed left-0 top-0 h-screen w-72 shadow-xl shadow-blue-gray-900/5 rounded-none">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="white" className="border-b pb-3">
                    Google Gak Drive
                </Typography>
            </div>
            <List className="text-white">
                {/* modal */}
                <Modals />
                {/* end modal */}
                <Link href="/dashboard">
                    <ListItem>
                        <ListItemPrefix>
                            <MdDashboard size={20} />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>
                <Link href="/folder-saya">
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Folder Saya
                    </ListItem>
                </Link>
                <ListItem className="bg-red-500 text-white">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card >
    );
}