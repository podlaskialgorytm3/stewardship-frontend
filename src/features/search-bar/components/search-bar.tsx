import ReactSearchBox from "react-search-box";

const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

export const SearchBar: React.FC = () => {
    return (
        <div className="400px mt-4">
            <ReactSearchBox
                    placeholder="Search for groups"
                    inputFontSize="16px"
                    inputHeight="35px"
                    data={data}
                    onSelect={(record) => console.log(record)}
                    onChange={(value) => console.log(value)}
                    leftIcon="🔍"
                />
        </div>
    )
}