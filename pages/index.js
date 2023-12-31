import React from "react";
import FileCard from "@/components/FileCard";
import { Button, Input } from "@material-tailwind/react";
import { CloudArrowUpIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserLayout from "@/components/UserLayout";

export default function Home() {
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };

  const [file, setFile] = React.useState("");
  const onChange = ({ target }) => setFile(target.value);
  return (
    <UserLayout>
      <div className="grid grid-cols-1 mx-5">
        <div className="lg:flex grid gap-y-5 lg:gap-y-0 items-center justify-between">
          <Button
            variant="gradient"
            className="flex items-center justify-center gap-3 w-44"
            onClick={handleClick}
          >
            <CloudArrowUpIcon className="h-5 w-5" />
            Upload Files
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </Button>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="text"
              label="Search"
              value={file}
              color="white"
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-0.5 top-[2.3px] rounded"
            >
              <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-x-6 gap-y-2">
          <FileCard />
          <FileCard />
          <FileCard />
          <FileCard />
        </div>
      </div>
    </UserLayout>
  );
}
