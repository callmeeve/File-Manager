import React from 'react';
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";

export default function UploadFile() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const handleOpen = () => setOpen(!open);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', file);
      // Menggunakan session.user.id untuk mengirim informasi ID pengguna ke API
      formData.append('userId', session.user.id);
  
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
  

  // Cek apakah session tidak null
  if (session) {
    return (
      <>
        <Button onClick={handleOpen} variant="gradient">
          Upload File
        </Button>
        <Dialog size="md" open={open} onClose={handleOpen}>
          <DialogHeader>Tambah File</DialogHeader>
          <DialogBody divider>
            <form onSubmit={handleSubmit}>
              <input
                type="file" id="file" onChange={handleFileChange}
                className="cursor-pointer my-3 w-full text-sm text-slate-500 file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-violet-100"
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
                <Button variant="gradient" type='submit' color="green">
                  <span>Submit</span>
                </Button>
              </div>
            </form>
          </DialogBody>
          <DialogFooter>
            <Typography>File Manager</Typography>
          </DialogFooter>
        </Dialog>
      </>
    );
  } else {
    return null; // Jika session null, tampilkan null (tidak ada tampilan)
  }
}
