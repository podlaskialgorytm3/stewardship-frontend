import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const SearchBar: React.FC<{placeholder: string, search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}> = ({placeholder, search, setSearch}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div className="relative w-[400px] mt-4">
            <input
                type="search"
                value={search}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 rounded-2xl w-full pl-10"
                placeholder={placeholder}
            />
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-black" />
    </div>
    )
}