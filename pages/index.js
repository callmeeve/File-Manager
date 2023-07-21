import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FileCard from "@/components/FileCard";
import { Typography } from "@material-tailwind/react";
import UserLayout from "@/components/UserLayout";
import UploadFile from "@/components/UploadFile";
import SearchBar from "@/components/SearchBar";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const Home = ({files}) => {
  console.log(files)
  const { data: session } = useSession();
  const router = useRouter();
  const [myUser, setMyUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(`/api/file/byname?name=${searchTerm}`);
      const files = await response.json();
      setSearchResults(files);
      setErrorMessage('');
    } catch (error) {
      console.error('Error searching files:', error);
      setSearchResults([]);
      setErrorMessage('Error occurred while searching files.');
    }
  };

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

  // console.log(myUser);

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
            <div className="lg:flex grid gap-y-5 lg:gap-y-0 items-center justify-between">
              <UploadFile/>
              <SearchBar onSearch={handleSearch}/>
              <div className="flex flex-row items-center">
                <Typography variant="h6" color="white" className="text-sm mx-3">{session.user.email}</Typography>
                <UserCircleIcon className="w-10 h-10 text-white"/>
              </div>
            </div>
            {/* <div className="grid grid-cols-3">
              {files.map((item) => {
                if (item.user.email === currentUser.email) {
                return (
                  <FileItem key={item.id} title={item.nama_files} email={item.email} date={item.date} currentUser={session.user} />
                );
                }else {
                  return null; // Jika bukan file pengguna yang login, tidak ditampilkan
                }
              })}
            </div> */}
              <FileCard files={searchResults.length > 0 ? searchResults : files} currentUser={session.user}  />
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

