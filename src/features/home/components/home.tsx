export const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center mt-20 ">
            <div className="w-[50%] h-[80vh] flex flex-col justify-center ml-20">
                <h1 className="text-8xl font-bold text-center">
                    welcome to stewardship app
                </h1>
                <p className="m-10 text-justify">
                An all-in-one platform designed to streamline employee management, enhance productivity,
                and foster efficient collaboration within your organization. With its robust set of features,
                Stewardship App empowers managers to effectively oversee their teams, assign tasks, create groups,
                and track work hours.
                </p>
            </div>
            <div className="w-[50%] h-[80vh] flex justify-center items-center mr-20">
                <img 
                    src="https://www.downloadclipart.net/large/purple-transparent-background.png" 
                    className="w-[500px] opacity-40"
                    alt="Purple star" />
            </div>
        </div>
    );
}