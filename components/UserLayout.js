import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function UserLayout({ children }) {
  return (
    <div className="flex w-full bg-blue-gray-900">
      <Card className="flex flex-col w-64 min-h-screen p-3 bg-white shadow">
        <div className="px-5 pt-5">
          <Typography variant="h5" color="blue-gray">
            File Manager
          </Typography>
        </div>
        <List>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5"/>
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            E-Commerce
          </ListItem>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem className="text-blue-500 hover:text-blue-900">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      <div className="container mx-auto px-3 py-8 bg-blue-gray-900">
        {children}
      </div>
    </div>
  );
}
