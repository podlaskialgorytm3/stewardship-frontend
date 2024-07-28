export const GroupCard = ({name,category} : {name: string, category: string}) => {
    return(
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-lg font-bold">{name}</h1>
                    <p className="text-sm">{category}</p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">View</button>
                </div>
            </div>
    )
}