import { Triangle } from "react-loader-spinner";

const Loading: React.FC<{ size: number }> = ({ size }) => {
  return (
    <Triangle
      visible={true}
      height={size}
      width={size}
      color="#7e007e"
      ariaLabel="triangle-loading"
    />
  );
};

export { Loading };
