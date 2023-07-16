import React from 'react';
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input
} from "@material-tailwind/react";

export default function UploadFile() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);

      const response = await fetch('/api/file/create', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        window.location.reload();
        console.log('File uploaded successfully:', data);
      } else {
        const error = await response.json();
        console.error('File upload failed:', error);
      }
    } catch (error) {
      console.error('File upload failed:', error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Tambah Data
      </Button>
      <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader>Tambah Folder</DialogHeader>
        <DialogBody divider>
          <form onSubmit={handleSubmit}>
            <Input size="md" label="Nama Folder" />
            <input
              type="file" id="file" onChange={handleFileChange}
              class="cursor-pointer my-3 w-full text-sm text-slate-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-violet-100"
            />
            <Input
              size="md"
              type="text"
              id="userId"
              label="User ID"
              value={userId}
              onChange={handleUserIdChange}
            />
            <div className="flex flex-row items-center justify-end my-2">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Batal</span>
              </Button>
              <Button variant="gradient" type='submit' color="green" onClick={handleOpen}>
                <span>Submit</span>
              </Button>
            </div>
          </form>
        </DialogBody>
        <DialogFooter/>
      </Dialog>
    </>
  );
}
