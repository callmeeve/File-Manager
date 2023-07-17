import { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Register() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/user/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User registered successfully:", data);
                Swal.fire("Registrasi berhasil!");
                router.push("/"); // Ganti dengan halaman dashboard Anda
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card color="transparent" shadow={true} className="px-5 py-6">
            <Typography variant="h4" color="blue-gray">
                    Selamat Datang 👋
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Silahkan daftar terlebih dahulu
                </Typography>
                <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    {error && <p>{error}</p>}
                    <div className="mb-4 flex flex-col gap-6">
                        <Input
                            size="lg"
                            label="Email"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            size="lg"
                            label="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Daftar
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Sudah punya akun?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                        >
                            Masuk
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
}
