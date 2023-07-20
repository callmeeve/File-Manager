import React from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Swal from 'sweetalert2'
import Link from "next/link";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function LoginForm() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        console.log(result);
        if (result.ok) {
            router.replace('/');
            return;
        }
        Swal.fire('Email Password Salah');
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card color="white" shadow={true} className="px-5 py-6">
                <Typography variant="h4" color="blue-gray">
                    Selamat Datang 👋
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Silahkan masuk terlebih dahulu
                </Typography>
                <form onSubmit={onSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Email" type="email" id="email" />
                        <Input type="password" size="lg" label="Password" id="password" />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Masuk
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Belum punya akun?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Daftar
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}