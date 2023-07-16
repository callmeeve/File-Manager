import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import React, {useState} from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <>
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    color="white"
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color="white"
                    onClick={handleSearch}
                    className="!absolute right-0.5 top-[2.3px] rounded"
                >
                    <MagnifyingGlassIcon strokeWidth={2} className="h-5 w-5" />
                </Button>
            </div>
        </>
    );
}

export default SearchBar;