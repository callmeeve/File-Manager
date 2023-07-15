import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card color="transparent" shadow={true} className="px-5 py-6">
        <Typography variant="h4" color="blue-gray">
          Selamat Datang 👋
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Silahkan login terlebih dahulu
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" value={email} onChange={handleChangeEmail} />
            <Input type="password" size="lg" label="Password" value={password} onChange={handleChangePassword} />
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
            Login
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