import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Button,
} from "@material-tailwind/react";
import {
  PowerIcon,
  DocumentIcon,
  HeartIcon,
  ClockIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserLayout({ children }) {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    // Additional logic after logout, such as redirecting the user
  };

  return (
    <div className="flex w-full bg-blue-gray-900">
      <Card className="flex flex-col w-64 min-h-screen p-3 bg-white shadow">
        <div className="px-5 pt-5 pb-3">
          <Typography variant="h5" color="blue-gray">
            File Manager
          </Typography>
        </div>
        <List className="text-sm">
          <Link href="/">
            <ListItem>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              File Saya
            </ListItem>
          </Link>
          <Link href="/terbaru">
            <ListItem>
              <ListItemPrefix>
                <ClockIcon className="h-5 w-5" />
              </ListItemPrefix>
              Terbaru
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <Link href="/gantipassword">
            <ListItem>
              <ListItemPrefix>
                <LockClosedIcon className="h-5 w-5" />
              </ListItemPrefix>
              Ganti Kata Sandi
            </ListItem>
          </Link>
          {session ? (
            <ListItem>
              <ListItemPrefix onClick={handleLogout}>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Logout
            </ListItem>
          ) : (
            <p>User is not authenticated</p>
          )}
        </List>
      </Card>
      <div className="container mx-auto px-3 py-8 bg-blue-gray-900">
        {children}
      </div>
    </div>
  );
}
