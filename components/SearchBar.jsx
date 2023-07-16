import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";

const SearchBar = () => {
    const [file, setFile] = React.useState("");
    const onChange = ({ target }) => setFile(target.value);

    return (
        <>
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
        </>
    );
}

export default SearchBar;