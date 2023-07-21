import React, { useState, useEffect } from "react";
import {useRouter}  from "next/router";
import { Typography, Input, Button } from "@material-tailwind/react";
import UserLayout from "@/components/UserLayout";
import { useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function GantiPasswordPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
          password: password,
          id: session.user.id,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message || "Error occurred!");
      }
    } catch (error) {
      setError("Error occurred! Please try again.");
    }
  };

  useEffect(() => {
    if (session == null) {
      localStorage.setItem("nextRoute", router.asPath);
      if (router.asPath !== "/login") {
        router.replace("/login");
      }
    }
  }, [session, router]);

  return (
    <>
      {session && (
        <UserLayout>
          <div className="grid grid-cols-1 mx-5">
            <div className="lg:flex grid gap-y-5 lg:gap-y-0 items-center justify-end">
              <div className="flex flex-row items-center">
                <Typography variant="h6" color="white" className="text-sm mx-3">
                  {session.user.email}
                </Typography>
                <UserCircleIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-12">
              <Typography variant="h4" className="text-white">
                Ganti Password
              </Typography>
              <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    type="password"
                    color="white"
                    size="lg"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    type="password"
                    color="white"
                    size="lg"
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {success && (
                  <Typography variant="body2" color="green">
                    Password updated successfully!
                  </Typography>
                )}
                {error && (
                  <Typography variant="body2" color="red">
                    {error}
                  </Typography>
                )}
                <Button className="mt-6" fullWidth onClick={handleChangePassword}>
                  Update Now
                </Button>
              </form>
            </div>
          </div>
        </UserLayout>
      )}
    </>
  );
}
