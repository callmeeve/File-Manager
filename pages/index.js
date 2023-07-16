import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FileCard from "@/components/FileCard";
import { Button, Input, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import UserLayout from "@/components/UserLayout";
import Upload from "@/components/UploadFile";

const Home = ({files}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:3000/api/user/all");
      const result = await response.json();
      if (result) {
        const roleUser = result.data;
        console.log(roleUser);
        setMyUser(roleUser);
      }
    };

    fetchUser();
  }, []);

  console.log(myUser);

  useEffect(() => {
    if (session == null) {
      localStorage.setItem("nextRoute", router.asPath);
      if (router.asPath !== "/login") {
        router.replace("/login");
      }
    }
  }, [session, router]);

  const [file, setFile] = React.useState("");
  const onChange = ({ target }) => setFile(target.value);

  return (
    <>
      {session && (
        <UserLayout>
          <div className="grid grid-cols-1 mx-5">
            <div className="lg:flex grid gap-y-5 lg:gap-y-0 items-center justify-between">
              <Upload/>
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  type="text"
                  label="Search"
                  value={file}
                  color="white"
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  size="sm"
                  color="white"
                  className="!absolute right-0.5 top-[2.3px] rounded"
                >
                  <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
                </Button>
              </div>
              <Typography variant="h6" color="white">{session.user.email}</Typography>
            </div>
            
              <FileCard files={files} />
           
          </div>
        </UserLayout>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/file/all');
  const files = await res.json();

  return {
    props: {
      files,
    },
  };
}

export default Home;

