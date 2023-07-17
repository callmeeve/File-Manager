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
  Input,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  DocumentIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const FileCard = ({ files, currentUser  }) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-x-6 gap-y-2">
      {files.map((file) => {
        // Cek apakah file.user.email sama dengan email pengguna yang login
        if (file.user.email === currentUser.email) {
          return (
            <Card className="mt-6 w-72 h-auto rounded-md" key={file.id}>
              <CardBody>
                <div className="flex items-center justify-center w-12 h-12 mb-4">
                  <DocumentIcon className="text-blue-500 w-10 h-10" />
                </div>

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
                <Button
                  size="sm"
                  variant="text"
                  onClick={() => handleDeleteFile(file.id)}
                >
                  <TrashIcon className="w-6 h-6" />
                </Button>
              </CardFooter>
            </Card>
          );
        } else {
          return null; // Jika bukan file pengguna yang login, tidak ditampilkan
        }
      })}

      <Dialog size="sm" open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogHeader>Update File Name</DialogHeader>
        <DialogBody divider>
          {selectedFile && (
            <Typography variant="paragraph" className="mb-3">
              {selectedFile.nama_file}
            </Typography>
          )}
          <Input
            size="md"
            type="text"
            label="File Name"
            value={newFileName}
            onChange={handleFileNameChange}
          />
        </DialogBody>
        <DialogFooter className="flex flex-row justify-end gap-3">
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
