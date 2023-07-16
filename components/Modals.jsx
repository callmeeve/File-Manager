import { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input
} from "@material-tailwind/react";

export default function Modals() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                Tambah Data
            </Button>
            <Dialog size="sm" open={open} handler={handleOpen}>
                <DialogHeader>Tambah Folder.</DialogHeader>
                <DialogBody divider>
                    <form>
                        <Input size="md" label="Nama Folder" />
                        <input 
                            type="file" 
                            class="cursor-pointer mt-3 w-full text-sm text-slate-500
                            file:cursor-pointer file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-400 file:text-white
                            hover:file:bg-violet-100"
                        />
                    </form>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Batal</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Submit</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}