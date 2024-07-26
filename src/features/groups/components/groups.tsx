import { SearchBar } from "../../search-bar/components/search-bar";


export const Groups: React.FC = () => {
    return (
        <div className="flex items-center flex-col min-h-[50vh] mt-10">
            <h1 className="text-2xl font-bold">Groups</h1>
            <SearchBar />
        </div>
    );
}