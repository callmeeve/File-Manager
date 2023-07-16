import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  RocketLaunchIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const FileCard = ({ files }) => {
  const [newFileName, setNewFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (file) => {
    setSelectedFile(file);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleFileNameChange = (event) => {
    setNewFileName(event.target.value);
  };

  const handleUpdateFileName = async (fileId) => {
    try {
      const response = await fetch("/api/file/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: fileId, nama_file: newFileName }),
      });

      if (response.ok) {
        // Handle success
        const updatedFile = await response.json();
        window.location.reload();
        console.log(updatedFile);
        // Do something with the updated file data
      } else {
        // Handle error
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    handleCloseDialog();
  };

  const handleDeleteFile = async (fileId) => {
    try {
      const response = await fetch("/api/file/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: fileId }),
      });

      if (response.ok) {
        // Handle success
        const deletedFile = await response.json();
        window.location.reload();
        console.log(deletedFile);
        // Do something with the deleted file data
      } else {
        // Handle error
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
            <Button
              size="sm"
              variant="text"
              onClick={() => handleOpenDialog(file)}
            >
              <PencilSquareIcon className="w-6 h-6" />
            </Button>
            <Button size="sm" variant="text" onClick={() => handleDeleteFile(file.id)}>
              <TrashIcon className="w-6 h-6" />
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Dialog size="sm" open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogHeader>Update File Name</DialogHeader>
        <DialogBody>
          {selectedFile && (
            <Typography variant="paragraph">
              {selectedFile.nama_file}
            </Typography>
          )}
          <input
            type="text"
            value={newFileName}
            onChange={handleFileNameChange}
            placeholder="New File Name"
          />
        </DialogBody>
        <DialogFooter>
          <Button color="red" onClick={handleCloseDialog}>
            Cancel
          </Button>
          <Button
            color="blue"
            onClick={() => handleUpdateFileName(selectedFile.id)}
            disabled={!selectedFile || !newFileName}
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default FileCard;
