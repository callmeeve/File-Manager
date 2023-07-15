import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card color="transparent" shadow={true} className="px-5 py-6">
                <Typography variant="h4" color="blue-gray">
                    Registrasi
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Silahkan daftar akun terlebih dahulu
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" />
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
                    </div>
                    <Checkbox
                        label={
                            (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-blue-500"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            )
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Sudah punya akun?{" "}
                        <Link
                            href="/"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Login
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}